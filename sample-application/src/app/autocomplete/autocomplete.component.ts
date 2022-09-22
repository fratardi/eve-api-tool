import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EveEsiService } from '../Services/eve-esi.service';




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

	list :dataItem[] = [];
	listPerson : any = [];		
	myForm!: FormGroup  ;
	formattedMessage: string = "";
	searchResults : any = [];

	autoCompleteSearchResults : any[] = this.esi_service.autoCompleteSearchresults;

	constructor(
		private formBuilder: FormBuilder,
		private esi_service : EveEsiService
	) {console.log('autocomplete construction'); }

updater (){

	this.autoCompleteSearchResults = this.esi_service.autoCompleteSearchresults


}

		yolo(){
			console.log(this.list , this)

		}

	addToWatchList(item :any ){
		console.log("yolo", item)
	}

	printComponent(){
		console.log("printcomponent 	" ,this)
		// this.listPerson.forEach( (element : any[] ) => {console.log(element )})
	}

	onSubmit(form: FormGroup) {
	}

	onChanges(): void {
		this.autoCompleteSearchResults = this.esi_service.autoCompleteSearchresults

  		this.myForm.statusChanges.subscribe(
			data => {
				console.log(data, this.myForm.value );
			//	this.autoCompleteSearchResults =  this.getList(this.myForm.value);

				this.esi_service.getCharactersFromString( this.myForm.value.name);

				this.autoCompleteSearchResults = this.esi_service.autoCompleteSearchresults

			}
		)
	}


  	bidule(){
		console.log(  "change value ",   "" , this)
  	}

 	ngOnInit(): void {
		console.log('hello from autocomplete', this);


setInterval(   ()=>  this.updater() , 100  )

		this.myForm = this.formBuilder.group({
		  	name: '',
		});
		this.onChanges();
  	}

}
