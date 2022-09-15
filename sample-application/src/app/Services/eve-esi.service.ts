import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Swagger from '../interfaces'

const REFRESH_TOKEN = 	'refresh_token';
const ACCESS_TOKEN  = 	'access_token';
const secretKey     =  	"jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"
const client_id   	=	"7f45c8124b2640beba3a6902df6832a2";

@Injectable({
  providedIn: 'root'
})
export class EveEsiService {


	hostpoint = "http://localhost:4200";
	token: any;
   	userOwn:any;
	base64string:any;

  	constructor(
		private http: HttpClient,
		private router: Router,
//		private route: ActivatedRoute,
	) {}

	base64encodedstring(client_id :string ,  secret  : string){
		let stringToEncode = client_id+ ":"+secret;
		return( "Basic "+btoa(stringToEncode))
	}

	getUserOwn(){
		console.log("Passe ICI", this.userOwn.CharacterID)
		let proxy = this.hostpoint + "/latest"
		this.http.get(proxy +"/characters/" +this.userOwn.CharacterID+"/corporationhistory/?datasource=tranquility")
		.subscribe(data  => {
			console.log("data", data)
		})
		console.log(this.token)
		return(this.userOwn);
	}

	generateCurlRequest(encodedSomething : string , base64encodedstring : string){
		let command =	'curl -XPOST -H ';
		let header = '"Content-Type:application/json" -H "Authorization:Basic '+ encodedSomething +'" -d ';
		let payload  = "'"+'{"grant_type":"authorization_code", "code":"'+base64encodedstring+'"}' + "' ";
		let url = "https://login.eveonline.com/oauth/token"
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
		
			this.base64string = base64encodedstring;
		
		let body1 = {"grant_type":"authorization_code", "code": "" + base64encodedstring + ""}
		this.http.post(  this.hostpoint +  '/postCodes',
			body1,
			{ headers: httpHeaders }
		)
		.subscribe(data  => {
			this.token = data as Swagger.Tokens;
			console.log("DATA  = ",data )
			let httpHeaders2 = new HttpHeaders(
				{"Authorization":" Bearer " +  this.token.access_token}
			)
	  		localStorage.setItem(ACCESS_TOKEN, this.token.access_token);
	  		localStorage.setItem(REFRESH_TOKEN, this.token.refresh_token);
			this.http.get(this.hostpoint+ '/verify',{headers  : httpHeaders2})
				.subscribe(e => {
				this.userOwn = e as	 Swagger.UserInfo;
				console.log(e , this.token.expires_in * 60)
				this.refreshWhenexpired(this.token.expires_in * 60) 
				this.router.navigate(['third-component']);
				return(this.userOwn)
			})
		})
	}

	refreshWhenexpired(duration:any ) {
		console.log("hello-i-am-refresh-service", duration )

	//	while(1){

		//	setTimeout(this., 414);

		// this.stupidGet()

//	this.refreshToken();

	////	}
	
	//	setTimeout(function,23)
		setInterval(() =>    this.refreshToken(), 2000  )
	}


	stupidGet()
	{
		this.http.get("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0")
			.subscribe(data => console.log(data))

	}



  	refreshToken(){
		console.log("hello-i-am-refreshToken")





		let something =  client_id+ ":" + secretKey;
		let encodedSomething = btoa(something);

		//let infos =	this.generateCurlRequest(encodedSomething, callbackCode.code.toString());
		//let base64encodedstring : string  =infos.base64encodedstring




		let httpHeaders = new HttpHeaders({
			"Authorization": "Basic " + encodedSomething,
			'Content-Type': 'application/json',
		});
		console.log("hello-i-am-refreshToken",  localStorage.getItem(REFRESH_TOKEN)?.valueOf())

		let body1 = {	
						"grant_type":"refresh_token",
						"refresh_token": "" +  localStorage.getItem(REFRESH_TOKEN)?.valueOf() + ""
					}


		console.log(
			 this.hostpoint +  '/postCodes',
			body1,
			{ headers: httpHeaders })


		this.http.post(  this.hostpoint +  '/postCodes',
		body1,
		{ headers: httpHeaders }
	)
	.subscribe(data  => {
		this.token = data as Swagger.Tokens;
		console.log("DATA  = ",data )
		let httpHeaders2 = new HttpHeaders(
			{"Authorization":" Bearer " +  this.token.access_token}
		)
		  localStorage.setItem(ACCESS_TOKEN, this.token.access_token);
		  localStorage.setItem(REFRESH_TOKEN, this.token.refresh_token);
		this.http.get(this.hostpoint+ '/verify',{headers  : httpHeaders2})
			.subscribe(e => {
			this.userOwn = e as	 Swagger.UserInfo;
		//	console.log(e , this.token.expires_in * 60)
		//	this.refreshWhenexpired(this.token.expires_in * 60) 
		//	this.router.navigate(['third-component']);
			return(this.userOwn)
		})
	})









	//	let body1 = {"grant_type":"authorization_code", "code": "" + base64encodedstring + ""}

	//	let body1 = {"grant_type":"authorization_code",   "refresh_token": "" + localStorage.getItem(REFRESH_TOKEN) + ""}
		//let body = {"grant_type":"authorization_code",  : currentToken};
	//	console.log('updating here ', body1, this.hostpoint, this.hostpoint +  '/postCodes'	);
		

	// 	this.http.get(  this.hostpoint +  '/postCodes',
	// //	body1,
	// 	//{ headers: httpHeaders }
	// )
	// .subscribe(data  => {

	// 	console.log( "hellooo maybe data but not checck ",  )

	// })

	}

  	getToken(): any {
		return localStorage.getItem(ACCESS_TOKEN);
 	}

	getRefreshToken(): any {

		console.log("getrefreshtoken ", localStorage.getItem(REFRESH_TOKEN))

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
