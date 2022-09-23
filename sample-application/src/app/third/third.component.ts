import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {

	characterContactsId: any;
	characterContactWithNames :any ; 
	currentUser : any;
	userId : any;

	constructor(
		private esi_service : EveEsiService,
	) { }
	
	trackByFn(index :any , item: any) { 
		return item.id; 
	}

	getContactlist() {
		console.log("hello<truc-" , this );
		this.characterContactsId 		= this.esi_service.characterContactsId;
		this .characterContactWithNames = this.esi_service.characterContactsWithName;
		this.esi_service.getItemInfoFromId(this.characterContactsId)	
	}

	ngOnInit(): void {
		this.characterContactsId =	this.esi_service.getCharacterContacts();
		this.characterContactsId = this.esi_service.characterContactsId;
		this.currentUser = this.esi_service.userOwn;
		this.userId = this.currentUser.CharacterID
  	}
}
