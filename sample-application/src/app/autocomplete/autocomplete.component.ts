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

addToWatchList(item :any ){
	console.log("yolo", item)

}


printComponent()
{

	console.log("printcomponent 	" ,this)
	// this.listPerson.forEach( (element : any[] ) => {console.log(element )})


}

onSubmit(form: FormGroup) {

}


onChanges(): void {
  this.myForm.statusChanges.subscribe(data =>{
	console.log(data, this.myForm.value );
	this.listPerson =  this.getList(this.myForm.value);
  }
  )
}


getList( element :any) {


	console.log(element , "DASKJD")

	this.esi_service.getCharactersFromString(element.name);

	// if(!!!element.name){
  	// 	this.list = [];
  	// 	return;
	// }
	// // let httpHeaders = new HttpHeaders({});
	// console.log(element.valueOf())

	// let swaggerUrl = "https://zkillboard.com/autocomplete/" + element.name + "/"
	// this.http.get<any>(swaggerUrl ,
	// //{headers: httpHeaders },
	// )
	// .subscribe((data : dataItem[] ) => {
	// this.list = data;

	//   this.list.forEach((element :dataItem) => {
	// 	  console.log(element)
	//   });
	// }
	// )



}

	myForm!: FormGroup  ;
	formattedMessage: string = "";
	constructor(private http: HttpClient,
			private formBuilder: FormBuilder,
			
			private esi_service : EveEsiService
			
			
			) {console.log('autocomplete construction'); }
  	bidule(){
		console.log(  "change value ",   "" , this)
  	}

 	ngOnInit(): void {
		console.log('hello from autocomplete', this);
		this.myForm = this.formBuilder.group({
		  	name: '',
		});
		this.onChanges();
  	}

}
