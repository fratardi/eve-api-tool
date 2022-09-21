import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {



//https://zkillboard.com/autocomplete/1st%20of/


onSubmit(form: FormGroup) {
  console.log('Valid?', form.valid); // true or false
  console.log('Name', form.value.name);
  console.log('Email', form.value.email);
  console.log('Message', form.value.message);
}


onChanges(): void {

  this.myForm.statusChanges.subscribe(data =>{ console.log(data, this ); }
   

    
    )

  this.myForm.valueChanges.subscribe(val => {
    this.formattedMessage =
    `Hello,

    My name is ${val.name} and my email is ${val.email}.

    I would like to tell you that ${val.message}.`;
  });
}

myForm!: FormGroup  ;
formattedMessage: string = "";


  constructor(	private formBuilder: FormBuilder ) {console.log('autocomplete construction'); }




  bidule()
  {
    console.log(  "change value ",   "" , this)

  }


  ngOnInit(): void {
    console.log('hello from autocomplete', this);


    this.myForm = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });

    this.onChanges();
  }

}
