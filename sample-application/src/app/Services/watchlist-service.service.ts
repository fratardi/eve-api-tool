import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {

	listPerson : any = []
	listKills : any[] =[];

	constructor(private http: HttpClient) { }

	updateList(item : any ){
		this.listPerson.pop();
		this.listPerson.push(item)
		console.log("from Service",item , this.listPerson)
	}

	removeWatchee(){
		this.listPerson.pop();
		this.listKills = [];
		console.log("from Service pop" , this.listPerson)
 	}


	getkillHash(parameter : number )	{
	}

	getKills(page : number){

		this.listKills = [];
		let  swaggerUrl =   "http://localhost:4200/zapi" + "kills/characterID/"  +  this.listPerson[0].id+ "/page/" + page +"/" ; // + + "/losses/page/1/"
		fetch( swaggerUrl)
		.then(function (response) {
		console.log("RESPONSE",response.body)
	 // The API call was successful!
		 return response.text();
	   })
	   .then( (data : any) => {
	 //	JSON.parse(data)
	 let x   =  	data.split('},')
	 let list : any[] = JSON.parse(data);
	 console.log( "Length Kills" , list.length	)

		if(list.length == 200)
		{
		
		
			setTimeout( () => { 	this.getKills(page + 1) }, 500 );

		}	
	   }).catch(function (err) {
		 console.log( err , "1SMIIILEEEE"  ,  );
			 // There was an error
		 console.warn('Something went wrong.', err);
	   });

	}


	getLosses(page : number){
		this.listKills = [];
		let  swaggerUrl =   "http://localhost:4200/zapi" + "losses/characterID/"  +  this.listPerson[0].id+ "/page/" + page +"/" ;
		fetch( swaggerUrl)
		.then(function (response) {
		console.log("RESPONSE Losses",response.body)
	 // The API call was successful!
		 return response.text();
	   })
	   .then( (data : any) => {
	 //	JSON.parse(data)
	 let x   =  	data.split('},')
	 let list : any[] = JSON.parse(data);
	 console.log("SIZE Losses" , list.length	)


	 if(list.length == 200){
		setTimeout( () => { 	this.getLosses(page + 1) }, 500 );
	 }


	   }).catch(function (err) {
		 console.log( err , "1SMIIILEEEE"  ,  );
			 // There was an error
		 console.warn('Something went wrong.', err);
	   });

	}

	getInfosabout() {
		this.getKills(1)
		this.getLosses(1)
	}


}