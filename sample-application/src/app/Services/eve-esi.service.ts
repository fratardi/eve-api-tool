import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Swagger from '../interfaces'


const REFRESH_TOKEN = 'refresh_token';
const ACCESS_TOKEN  = 'access_token';
const secretKey     =  	"jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"
const client_id   	=	"7f45c8124b2640beba3a6902df6832a2";

@Injectable({
  providedIn: 'root'
})
export class EveEsiService {

	  token: any;
   userOwn:any;
  constructor(	private http: HttpClient,
	private router: Router,
		private route: ActivatedRoute,
	) {}

	base64encodedstring(client_id :string ,  secret  : string){
		let stringToEncode = client_id+ ":"+secret;
		return( "Basic "+btoa(stringToEncode))
	}

//
  getUserOwn  ()
  {
  //  let character_id = "91493392";
	// setInterval(this.getUserOwn, 1000)
	console.log("Passe ICI", this.userOwn.CharacterID)

	let proxy = "http://localhost:4200/latest"

	this.http.get(proxy +"/characters/" +this.userOwn.CharacterID+"/corporationhistory/?datasource=tranquility")
	.subscribe(data  => {

	  console.log("data", data)

	})


	  console.log(//this.userOwn,
		 this.token)
	return(this.userOwn);
  }

	generateCurlRequest(encodedSomething : string , base64encodedstring : string){
		let command =	'curl -XPOST -H ';
		let header = '"Content-Type:application/json" -H "Authorization:Basic '+ encodedSomething +'" -d ';
		let payload  = "'"+'{"grant_type":"authorization_code", "code":"'+base64encodedstring+'"}' + "' ";
		let url = "https://login.eveonline.com/oauth/token"
	//	console.log( command +header + payload + url  );
		return ({ encodedSomething: encodedSomething , base64encodedstring : base64encodedstring     })  ;
	}


  init_service(callbackCode :any)  {
	let something =  client_id+ ":" + secretKey;
		let encodedSomething = btoa(something);
		let httpHeaders = new HttpHeaders({
			"Authorization": "Basic " + encodedSomething,
			'Content-Type': 'application/json',
		});
	let infos =	this.generateCurlRequest(encodedSomething, callbackCode.code.toString());
		let base64encodedstring : string  =infos.base64encodedstring
	let body1 = {"grant_type":"authorization_code", "code":""+base64encodedstring+""    }
	console.log("YOLO")
	this.http.post('http://localhost:4200/postCodes',
		body1,
		{ headers: httpHeaders }
		 )
		.subscribe(data  => {
			this.token = data as Swagger.Tokens;
			console.log("DATA  = ",data )
			let httpHeaders2 = new HttpHeaders({"Authorization":" Bearer " +  this.token.access_token})

	  localStorage.setItem(ACCESS_TOKEN, this.token.access_token);
	  localStorage.setItem(REFRESH_TOKEN, this.token.refresh_token);

			this.http.get('http://localhost:4200/verify',{headers  : httpHeaders2})
				.subscribe(e => {
				this.userOwn = e as	 Swagger.UserInfo;
				console.log(e)
		this.router.navigate(['third-component']);
		return(this.userOwn)
				// this.http.get('http://localhost:4200/latest/characters/'+userOwn.CharacterID+'/standings/',{headers  : httpHeaders2})
				// .subscribe(e => {console.log("makumbass",e)})
			})
		})
	console.log("endof" , this.token)
	console.log("endof2" , this.token)
  }

  askRefresh(currentToken: string)
  {
	let body = {"grant_type":"authorization_code",    "refresh_token": currentToken};
  }

  getToken(): any {
	return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): any {
	return localStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token: any): void {
	localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken : any ): void {
	localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
	localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
	localStorage.removeItem(REFRESH_TOKEN);
  }
}
