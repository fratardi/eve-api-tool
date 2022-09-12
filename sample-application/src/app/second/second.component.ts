import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
// express = require('express');
@Component({
	selector: 'app-second',
	templateUrl: './second.component.html',
	styleUrls: ['./second.component.less']
})



export class SecondComponent implements OnInit {

	constructor(
		private http: HttpClient
		,

		private route: ActivatedRoute
		//,
	) { 
	
	}

	// curl -XPOST -H "Content-Type:application/json" -H "Authorization:Basic Y2xpZW50X2lkOmNsaWVudHNlY3JldDE="
	// -d '{"grant_type":"authorization_code", "code":"ckEZIa6JUOdoN6ijmqBI...qgpU-SmPsZ0"}'



	// https://login.eveonline.com/oauth/token



	ngOnInit(): void {

	let secretKey  =  	"jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"
	let client_id 	=	"7f45c8124b2640beba3a6902df6832a2";
	let authorizationToken  : any ; 
	this.route.queryParams.  subscribe(e => authorizationToken = e)
	this.route.data.subscribe(element => console.log(element));

	console.log( "authorizationToken",  authorizationToken);
	console.log( "secretKey",  secretKey);
	console.log( "client_id",  client_id);




	let something =  client_id+ ":" + secretKey;
	let encodedSomething = btoa(something);


	 	console.log("encoded something",encodedSomething)

	// let toEncode   = "client_id:" + secretKey
	// let encoded  = btoa(toEncode)


	const headers = {
		"Authorization": "Basic " + encodedSomething,
		"Content-Type": "application/json",
	 	    "Host": "login.eveonline.com",
	//	"Access-Control-Allow-Origin": "*"
	}



	//	console.log( "this = " , this, window.location.search.substring(6, window.location.search.length) );
		let  authorization_code  = window.location.search.substring(6, window.location.search.length) ;
		console.log("AUTH:" + authorization_code);
	 //  base-64 encoded string of {client id}:{client_secret}.

		const body = JSON.stringify({
			"grant_type":"authorization_code",
			"code": authorizationToken
		});

 let formEncodedValue = "grant_type=authorization_code&code="+  authorizationToken;


// let string =  "{-
//   "grant_type":"authorization_code",
//   "code":"{the authorization code}"
// }";

 //   curl -XPOST -H "Content-Type:application/json" -H "Authorization:Basic 6316r0k1zPFjozFC0dH0gcux6ahu4mGSXi-59JdeN1LuX4ylWNE4cNykqy3KQrn4=" -d '{"grant_type":"authorization_code", "code":"N2Y0NWM4MTI0YjI2NDBiZWJhM2E2OTAyZGY2ODMyYTI6amNWWG8wSVpGdDVZRHI4QUozWjdjS0NEZlZpak54S2h1cE9LQ1EySQ"}' https://login.eveonline.com/v2/oauth/token




		this.http.post('https://login.eveonline.com/v2/oauth/token',
		 body,
		 {headers}
		 )
		.subscribe(data => console.log("DATA  = ",data))
// https://login.eveonline.com/v2/oauth/token


	}
}