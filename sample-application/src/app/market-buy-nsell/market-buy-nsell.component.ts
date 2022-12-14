import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-market-buy-nsell',
  templateUrl: './market-buy-nsell.component.html',
  styleUrls: ['./market-buy-nsell.component.less']
})
export class MarketBuyNSellComponent implements OnInit {

	item 	= new FormControl('');
	region 	= new FormControl('');

	regionListSelect : any ; 


	itemListSelect :any[] | undefined;

	constructor(
		private esi_service : 	EveEsiService
	){}

	initForms()
	{
		this.item.statusChanges.subscribe(
			data => {
				console.log("change item",this.item.value);
				console.log(data, this.item.value );
		})
		this.region.statusChanges.subscribe(
			data => {
				console.log("change region",this.regionListSelect);
				this.regionListSelect = this.esi_service.getRegionsIds();
				// console.log("YOLO",  data, this.esi_service.getRegionsIds() );
		})
	}

	ngOnInit(): void {
		this.initForms();
		this.esi_service.getRegionsIds() 
		this.regionListSelect = this.esi_service.getRegionsIds();
		
	//	this.esi_service.getRegionsIds()
	}
}
