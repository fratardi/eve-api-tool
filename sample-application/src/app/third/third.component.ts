import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {

	constructor(
		private esi_service : EveEsiService,
		private http: HttpClient
	) { }
	
	truc(){
	//	console.log(this.esi_service.getUserOwn())	


	this.esi_service.getCharacterContacts();
	}

	ngOnInit(): void {
		this.truc();
  	}
}
