import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Swagger from '../interfaces'


const REFRESH_TOKEN = 'refresh_token';
const ACCESS_TOKEN = 'access_token';
@Injectable({
  providedIn: 'root'
})
export class EveEsiService {



	 secretKey :string =  	"jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"
	 client_id :string 	=	"7f45c8124b2640beba3a6902df6832a2";
   token!: Swagger.Tokens;

  constructor(	private http: HttpClient,) {}



  init_service(body:any , httpHeaders :HttpHeaders , lol:any)
  {
    console.log("YOLO"+lol)
    this.http.post('http://localhost:4200/postCodes',
		body,
		{ headers: httpHeaders }
		 )
		.subscribe(data  => {
			this.token = data as Swagger.Tokens;
			console.log("DATA  = ",data )
			let httpHeaders2 = new HttpHeaders({"Authorization":" Bearer " +  this.token.access_token})	
			// this.http.get('http://localhost:4200/verify',{headers  : httpHeaders2})
			// 	.subscribe(e => {
        localStorage.setItem(ACCESS_TOKEN, this.token.access_token);
			// 	this.userOwn = e as	 Swagger.UserInfo;
			// 	console.log(this.userOwn)
			// 	// this.http.get('http://localhost:4200/latest/characters/'+userOwn.CharacterID+'/standings/',{headers  : httpHeaders2})
			// 	// .subscribe(e => {console.log("makumbass",e)})
			// })
		})

    console.log("endof" , this.token)


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
