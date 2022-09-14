import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import * as Swagger from '../interfaces'
import { EveEsiService } from '../Services/eve-esi.service';



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


	client_id 	=	"7f45c8124b2640beba3a6902df6832a2";
	secretKey  =  	"jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"

	token : Swagger.Tokens|undefined;

	userOwn : Swagger.UserInfo | undefined;
	
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
		private esi_service : EveEsiService
		
	) { }

	generateCurlRequest(encodedSomething : string , base64encodedstring : string){
		let command =	'curl -XPOST -H ';
		let header = '"Content-Type:application/json" -H "Authorization:Basic '+ encodedSomething +'" -d ';
		let payload  = "'"+'{"grant_type":"authorization_code", "code":"'+base64encodedstring+'"}' + "' ";
		let url = "https://login.eveonline.com/oauth/token"
	//	console.log( command +header + payload + url  );
		return ({ encodedSomething: encodedSomething , base64encodedstring : base64encodedstring     })  ;
	}

	base64encodedstring(client_id :string ,  secret  : string){
		let stringToEncode = client_id+ ":"+secret;
		return( "Basic "+btoa(stringToEncode))
	}


	truc()
	{

		console.log(this.esi_service.token.access_token)

	}



	ngOnInit(): void {
	

	let authorizationToken  : any ; 
	this.route.queryParams.subscribe(e => authorizationToken = e)
	let something =  this.client_id+ ":" + this.secretKey;
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


	this.esi_service.init_service(    body , httpHeaders  , 	this.route.queryParams.  subscribe(e => authorizationToken = e)  )


	// 	let truc : Swagger.Welcome;
	// 	this.http.get('http://localhost:4200/api').subscribe(e =>{ truc = e as Swagger.Welcome
	
	// 	console.log(truc.paths['/markets/prices/'])
	
	// 
	let 	truc = this.esi_service.token as Swagger.Tokens;
	
	//this.http.post('http://localhost:4200/xway', body).subscribe(e => console.log("makumbass",e))

//this.http.get('http://localhost:4200/api').subscribe(e => console.log("makumba",e))

	console.log( "HELLOOOO" + truc )

	}

}