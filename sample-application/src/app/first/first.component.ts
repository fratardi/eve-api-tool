import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Swagger from '../interfaces'
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})

export class FirstComponent implements OnInit {
  	Swagger : any = null;
  	scopes: string[] = [];
	paths!: Swagger.Paths;
	
	toppings = new FormControl('', );
	toppingList: string[] = [] ;


	constructor(private http: HttpClient,)
	{ 

	//	console.log("construct this first-component")

	}
		

	printForm()
	{

		console.log("tprintform", this.toppings.getRawValue())

	}

	ngOnInit() {
		this.getSwagger();
	}

	goToLogin() {	

		let truc : any=  this.toppings.value;

		// for (const field in this.toppings.getRawValue) { // 'field' is a string
		// 	console.log(this.myForm.controls[field].value);
		//   }

	
		//	console.log(this.toppings.getRawValue.prototype)
	


		//console.log(JSON.stringify(this.toppings.value?.toString).valueOf)

		// JSON.stringify(this.toppings.value).valueOf.forEach(element => {
			
		// });

		let scopes = 'esi-characters.read_standings.v1';
		let  url  = 'https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4200/esi_callback&client_id=7f45c8124b2640beba3a6902df6832a2&scope='+ scopes 
	// console.log(,url)
		
		 	window.location.href = url;
	}

	printSwagger() {
		this.scopes = this.Swagger.securityDefinitions.evesso.scopes;
		let tmp =  this.scopes
		tmp.lastIndexOf
	}

	getSwagger() {
	let swaggerUrl = "https://esi.evetech.net/latest/swagger.json?datasource=tranquility"
	this.http.get<any>(swaggerUrl )
	  .subscribe((data : any ) => {
		  this.Swagger = data
		  console.log(data.securityDefinitions.evesso.scopes)
		console.log(Array.from(data.securityDefinitions.evesso))
		var result = [];
	for(var i in data.securityDefinitions.evesso.scopes)
   	 	result.push([i, data.securityDefinitions.evesso.scopes[i]]);
		result.forEach( element => {
			this.scopes.push(element[0])
		})
		this.toppingList = this.scopes
	})}
}