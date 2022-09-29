import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {

	listPerson : any = []
	listKillIds : string[] =[];
	killHashes :string[] = [];

	constructor(private http: HttpClient) { }

	updateList(item : any ){
		this.listPerson.pop();
		this.listPerson.push(item)
		console.log("from Service",item , this.listPerson)
	}

	removeWatchee(){
		this.listPerson.pop();
		this.listKillIds = [];
		console.log("from Service pop" , this.listPerson)
 	}


	getkillHash(parameter : string )
	{
			console.log("Getkillhash " , parameter)
			let  swaggerUrl =   "http://localhost:4200/kill" + "/" +parameter
			fetch( swaggerUrl)
			.then(function (response) {
	//	  console.log("RESPONSE",response)
		 // The API call was successful!
			 return response.text();
		   })
		   .then( (data : any) => {
			console.log("[[",data  , "]]")
			let x = 0 ;
				data.split('<url=killReport:')
				.forEach((element : string) => {
					let e = element.slice(0, 60).slice(0 , -15) as string ;
						console.log("HASH ??" ,e , x)
						x = x++;
				})	
		   })
	}


	getInfosabout() {
	//	kills/characterID/268946627/
		this.listKillIds = [];
   		let  swaggerUrl =   "http://localhost:4200/zapi" + "kills/characterID/"  +  this.listPerson[0].id+ "/" ; // + + "/losses/page/1/"
   		fetch( swaggerUrl)
   		.then(function (response) {
		   console.log("RESPONSE",response.body)
		// The API call was successful!
			return response.text();
  		})
  		.then( (data : any) => {
		//	JSON.parse(data)
	    let x   =  	data.split('},')
		let list : any[] = [];
		console.log(	JSON.parse(data))
  		}).catch(function (err) {
			console.log( err , "1SMIIILEEEE"  ,  );
				// There was an error
			console.warn('Something went wrong.', err);
 		 });


	}


}