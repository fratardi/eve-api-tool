import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Swagger from '../interfaces'
import { EveEsiService } from '../Services/eve-esi.service';

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
		})
	}
}


