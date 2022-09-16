import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

import * as Swagger from '../interfaces'


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {

	characterContacts: any;

	currentUser : any;
	userId : any;
	constructor(
		private esi_service : EveEsiService,
		private http: HttpClient
	) { }
	
	truc(){
		console.log(this.currentUser.CharacterID)
	//	console.log("YOLOO",this.characterContacts.CharacterID)	
	}

	ngOnInit(): void {
		// this.truc();
		this.esi_service.getCharacterContacts();
		this.characterContacts = this.esi_service.characterContacts;
		this.currentUser = this.esi_service.userOwn;
		this.userId = this.currentUser.CharacterID

	//	console.log("YOLOO",this.characterContacts.CharacterID)	
  	}
}
