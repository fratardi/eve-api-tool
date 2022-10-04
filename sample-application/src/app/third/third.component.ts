import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';
import { WatchlistServiceService } from '../Services/watchlist-service.service';


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
	stats : any  ; 

	constructor(
		private esi_service : EveEsiService,
		private watchlist : WatchlistServiceService 
	) { }
	
	trackByFn(index :any , item: any) { 
		return item.id; 
	}

	getContactlist() {
		console.log("getContactList" , this );
		this.characterContactsId 		= this.esi_service.characterContactsId;
		this .characterContactWithNames = this.esi_service.characterContactsWithName;
		this.esi_service.getItemInfoFromId(this.characterContactsId)	
	}

	ngOnInit(): void {

//		this.watchlist.stats.subscribe( (  e : any  ) => { console.log("hello")  }   )
		this.characterContactsId =	this.esi_service.getCharacterContacts();
		this.characterContactsId = this.esi_service.characterContactsId;
		this.currentUser = this.esi_service.userOwn;
		this.userId = this.currentUser.CharacterID
  	}
}
