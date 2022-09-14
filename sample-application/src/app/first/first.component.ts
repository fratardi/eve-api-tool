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
	
	toppings = new FormControl('');
	toppingList: string[] = [] ;//= ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


	constructor(private http: HttpClient,)
	{ 

		

	}
		

	printForm()
	{

		console.log(this.toppings)

	}

	ngOnInit() {
		this.getSwagger();
	}

	goToLogin() {
		let  url  = 'https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4200/esi_callback&client_id=7f45c8124b2640beba3a6902df6832a2&scope=esi-characters.read_standings.v1'
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


			
			console.log(result)
		
		result.forEach( element => {

			  this.scopes.push(element[0])
			console.log(element[0] )

		})
		console.log(this.scopes)
		this.toppingList = this.scopes
	
		//   data.securityDefinitions.evesso.scopes.forEach(element => {
		// 	console.log(element)
		//   });

		// data.securityDefinitions.evesso.scopes.forEach((element: any) => {
		// 	console.log(element)
		// });

		// data.securityDefinitions.evesso.scopes.forEach(element => {
		// 	console.log(element)
		// });

	})}
}