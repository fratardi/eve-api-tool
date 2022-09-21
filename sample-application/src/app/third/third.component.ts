import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

import * as Swagger from '../interfaces'

import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {




	trackByFn(index :any , item: any) { 
		return item.id; 
	  }

	items = [ 1 ,2 ,3 ];

	characterContactsId: any;
	characterContactWithNames :any ; 
	currentUser : any;
	userId : any;
	constructor(
		private esi_service : EveEsiService,
	) { }
	
	truc(){
		console.log("hello<truc-" , this );

	//	this.characterContactsId =	this.esi_service.getCharacterContacts();
		this.characterContactsId 		= this.esi_service.characterContactsId;
		this .characterContactWithNames = this.esi_service.characterContactsWithName;
		this.esi_service.getNamesFromId(this.characterContactsId)

	//	console.log("YOLOO",this.characterContacts.CharacterID)	
	
	}

	ngOnInit(): void {
		// this.truc();
		this.characterContactsId =	this.esi_service.getCharacterContacts();
		this.characterContactsId = this.esi_service.characterContactsId;
		this.currentUser = this.esi_service.userOwn;
		this.userId = this.currentUser.CharacterID

	//	console.log("YOLOO",this.characterContacts.CharacterID)	
  	}
}
