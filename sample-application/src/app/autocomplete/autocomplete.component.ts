import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EveEsiService } from '../Services/eve-esi.service';
import { WatchlistServiceService } from '../Services/watchlist-service.service';

interface dataItem{
  id: number;
  image: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})

export class AutocompleterComponent implements OnInit {

	autoCompleteSearchResults	:	any[] 		= this.esi_service.autoCompleteSearchresults;
	formattedMessage			:	string 		= "";
	searchResults				:	any 		= [];
	listPerson 					:	any 		= [];		
	myForm!						:	FormGroup  		;
	list 						:	dataItem[] 	= [];

	constructor(
		private formBuilder	: FormBuilder,
		private esi_service : EveEsiService,
		private watchlist 	: WatchlistServiceService, 
	){
//		console.log('autocomplete construction')
	}

	updater (){
		this.esi_service.autoCompleteSearchresults.sort((a, b) =>  (b.name - a.name)); 
		this.autoCompleteSearchResults = this.esi_service.autoCompleteSearchresults
	}

	yolo(){
//		console.log(this.list , this)
	}

	addToWatchList(item :any ){
//		console.log("yolo", item)
		this.watchlist.updateList(item)
	}

	printComponent(){
		// console.log("printcomponent 	" ,this)
		// this.listPerson.forEach( (element : any[] ) => {console.log(element )})
	}

	onSubmit(form: FormGroup) {
	}

	onChanges(): void {
		this.autoCompleteSearchResults = this.esi_service.autoCompleteSearchresults
  		this.myForm.statusChanges.subscribe((data :any)	=>{
//				console.log(this.myForm.value.name);
				if(this.myForm.value.name .length < 3 ) {
					this.esi_service.autoCompleteSearchresults	= [];
					this.autoCompleteSearchResults 				= [];
					return
				}
//				console.log(data, this.myForm.value );
				this.esi_service.getCharactersFromString( this.myForm.value.name);
		})
	}

  	bidule(){
//		console.log(  "change value", "", this)
  	}

 	ngOnInit(): void {
//		console.log('hello from autocomplete', this);
		setInterval(() => this.updater(), 1000 / 24 );
		this.myForm = this.formBuilder.group({
		  		name: '',
		});
		this.onChanges();
  	}
}
