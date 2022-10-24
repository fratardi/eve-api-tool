import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, RouterModule, Routes} from '@angular/router';
import * as Swagger from '../interfaces'
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html',
	styleUrls: ['./second.component.less']
})

export class SecondComponent implements OnInit {
	userOwn  :	any;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private esi_service : EveEsiService) { 
	}

	truc(){
		this .userOwn = this.esi_service.getUserOwn();
		this.router.navigate(['third-component']);	
	}

	ngOnInit(): void {
		let callbackCode  : any ; 
		this.route.queryParams.subscribe(e => {
			callbackCode = e
			this.esi_service.init_service(callbackCode)
		})
		this .userOwn = this.esi_service.getUserOwn();
		this.router.navigate(['third-component']);	
	}
}
