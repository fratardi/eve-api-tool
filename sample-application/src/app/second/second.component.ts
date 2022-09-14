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

	userOwn!  :	 Swagger.UserInfo;

	
	constructor(
		private route: ActivatedRoute,
		private esi_service : EveEsiService
	) { }

	truc(){
		console.log("!!!!!!")
		this.esi_service.getUserOwn();
	}


	ngOnInit(): void {
		let callbackCode  : any ; 
		this.route.queryParams.subscribe(e => {
			callbackCode = e
			  this.esi_service.init_service( callbackCode)
			//this.userOwn = 
		//	this.esi_service.getUserOwn();

		})
	}
}


