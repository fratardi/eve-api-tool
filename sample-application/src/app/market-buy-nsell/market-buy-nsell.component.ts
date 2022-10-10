import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-market-buy-nsell',
  templateUrl: './market-buy-nsell.component.html',
  styleUrls: ['./market-buy-nsell.component.less']
})
export class MarketBuyNSellComponent implements OnInit {



	//list :dataItem[] = [];
	// listPerson : any = [];		
	// myForm!: FormGroup  ;
	// formattedMessage: string = "";
	// searchResults : any = [];
	//autoCompleteSearchResults : any[] = this.esi_service.autoCompleteSearchresults;

  item = new FormControl('');
  region = new FormControl('');
	


  constructor() { }

  ngOnInit(): void {
    this.item.statusChanges.subscribe(
			data => {
			  console.log("change",this.item.value);
        console.log(data, this.item.value );
      })
  }

  clickme(username:string) {
    console.log('it does nothing');
  }

	onSubmit(form: FormGroup) {

    console.log( "MARKET WATCHER  ")

	}

	updater (){
    console.log("updater" , this)
	//	this.esi_service.autoCompleteSearchresults.sort((a,b) =>  b.name  - a.name  ); 
//		this.autoCompleteSearchResults = this.esi_service.autoCompleteSearchresults
	}

}
