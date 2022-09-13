import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import * as Swagger from '../interfaces'



// interface ownUsrInfo{

// CharacterID
// : 
// number
// CharacterName
// : 
// string//"Golden Buddha"
// CharacterOwnerHash
// : 
// string//"0EKQBXIDa5v1nlmFbf996baIGnI="
// ExpiresOn
// : 
// string//"2022-09-13T21:52:48"
// IntellectualProperty
// : 
// string//"EVE"
// Scopes
// : 
// string[]//"esi-characters.read_standings.v1"
// TokenType
// : 
// string//"Character"
// }



// express = require('express');
@Component({
	selector: 'app-second',
	templateUrl: './second.component.html',
	styleUrls: ['./second.component.less']
})

export class SecondComponent implements OnInit {

	constructor(
		private http: HttpClient,
		private route: ActivatedRoute

		
	) { }


	crapFunc(encodedSomething : string , base64encodedstring : string )
	{

		// console.log("Prefetch")


		// fetch('https://login.eveonline.com/oauth/token', {
		// 	method: 'POST',
		// //	mode: "no-cors",
			
		// 	headers: {
		// 		'Sec-Fetch-Site': 'cross-site',
		// //		'access-control-allow-origin': '*',
		// 		'Content-Type': 'application/json',
		// 		'Authorization': 'Basic ' + encodedSomething//N2Y0NWM4MTI0YjI2NDBiZWJhM2E2OTAyZGY2ODMyYTI6amNWWG8wSVpGdDVZRHI4QUozWjdjS0NEZlZpak54S2h1cE9LQ1EySQ=='
		// 		//,
		// 		//'Referrer-Policy': 'no-referrer'
				
		// 	},
		// 	// body: '{"grant_type":"authorization_code", "code":"4viSS1nqvBv9NzWVkVfRnByr4AeoxUbSAlLE_OjAvwGJeasTrXgB5sHPLEdmZQQm"}',
		// 	body: JSON.stringify({
		// 		'grant_type': 'authorization_code',
		// 		'code': encodedSomething
		// 	})
		// }).then(e => console.log(e));
		// console.log("afterfetch")

	}


	generateCurlRequest(encodedSomething : string , base64encodedstring : string)
	{
		let command =	'curl -XPOST -H ';
		let header = '"Content-Type:application/json" -H "Authorization:Basic '+ encodedSomething +'" -d ';
		let payload  = "'"+'{"grant_type":"authorization_code", "code":"'+base64encodedstring+'"}' + "' ";
		let url = "https://login.eveonline.com/oauth/token"
		//let request = {command : command , header : header , payload: payload , url : url}
		console.log( command +header + payload + url  );
		this.crapFunc(encodedSomething , base64encodedstring);

		return ({ encodedSomething: encodedSomething , base64encodedstring : base64encodedstring     })  ;


	}


	base64encodedstring(client_id :string ,  secret  : string)
	{
		let stringToEncode = client_id+ ":"+secret;
		return( "Basic "+btoa(stringToEncode))
	}

	ngOnInit(): void {

	let secretKey  =  	"jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"
	let client_id 	=	"7f45c8124b2640beba3a6902df6832a2";
	let authorizationToken  : any ; 
	this.route.queryParams.  subscribe(e => authorizationToken = e)
	let something =  client_id+ ":" + secretKey;
	let encodedSomething = btoa(something);
	let httpHeaders = new HttpHeaders({
		"Authorization": "Basic " + encodedSomething,
		'Content-Type': 'application/json',
	});
	let infos =	this.generateCurlRequest(encodedSomething, authorizationToken.code.toString());
	let base64encodedstring : string =infos.base64encodedstring
	let body = {"grant_type":"authorization_code", "code":""+base64encodedstring+""    }
	let access_token : Swagger.Tokens;


	let paths : Swagger.Paths ;




	let userOwn :Swagger.UsrInfo;
	this.http.post('http://localhost:4200/postCodes',
		body,
		{ headers: httpHeaders }
		 )
		.subscribe(data  => {
			access_token = data as Swagger.Tokens;
			console.log("DATA  = ",data )
			let httpHeaders2 = new HttpHeaders({"Authorization":" Bearer " +  access_token.access_token})	
			this.http.get('http://localhost:4200/verify',{headers  : httpHeaders2})
				.subscribe(e => {console.log("makumbass",e)
			
				userOwn = e as Swagger.UsrInfo;
				// this.http.get('http://localhost:4200/latest/characters/'+userOwn.CharacterID+'/standings/',{headers  : httpHeaders2})
				// .subscribe(e => {console.log("makumbass",e)})
			})


		})

		let truc : Swagger.Welcome;

		this.http.get('http://localhost:4200/api').subscribe(e =>{ truc = e as Swagger.Welcome
	
		console.log(truc.paths['/characters/{character_id}/bookmarks/folders/'])
	
	})
	
	//this.http.post('http://localhost:4200/xway', body).subscribe(e => console.log("makumbass",e))

//this.http.get('http://localhost:4200/api').subscribe(e => console.log("makumba",e))



	}

}