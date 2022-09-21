import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleterComponent implements OnInit {



//https://zkillboard.com/autocomplete/1st%20of/


onSubmit(form: FormGroup) {
  console.log('Valid?', form.valid); // true or false
  console.log('Name', form.value.name);
  console.log('Email', form.value.email);
  console.log('Message', form.value.message);
}


onChanges(): void {
  this.myForm.statusChanges.subscribe(data =>{ 
    console.log(data, this.myForm.value ); 
    this.getSwagger(this.myForm.value); 
  }
  )
}


getSwagger( element :any) {
  let httpHeaders = new HttpHeaders({});
  console.log(element.valueOf())


	let swaggerUrl = "https://zkillboard.com/autocomplete/" + element.name + "/"
	this.http.get<any>(swaggerUrl ,  
    
  {headers: httpHeaders },

    )
	.subscribe((data : any ) => {
    console.log("data", data , element)
	})}





myForm!: FormGroup  ;
formattedMessage: string = "";


  constructor(private http: HttpClient,	private formBuilder: FormBuilder ) {console.log('autocomplete construction'); }
  
  bidule()
  {
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
