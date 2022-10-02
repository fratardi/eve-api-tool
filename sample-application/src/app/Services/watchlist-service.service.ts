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
	listLosses : any[] =[];
	list: any;

	constructor(private http: HttpClient) { }

	updateList(item : any ){
		this.listPerson.pop();
		this.listPerson.push(item)
		console.log("from Service",item , this.listPerson , "https://zkillboard.com/api/stats/characterID/844646062/")
		this.getStats();
	}

	removeWatchee(){
		this.listPerson.pop();
		this.listKills = [];
		this.listLosses = [];
		console.log("from Service pop" , this.listPerson)
 	}

	getkillHash(parameter : number )	{
	}


	getStats(){
		let  swaggerUrl =   "http://localhost:4200/zapi" + "stats/characterID/"  +  this.listPerson[0].id+ "/"  ; // + + "/losses/page/1/"
		fetch( swaggerUrl)
		.then(function (response) {
			return response.text();
	   	})
		.then( (data : any) => {
	 		let list : any = JSON.parse(data);


			// //this.listKills.push(list)

			// list.forEach( (element  : any) =>{
			//	this.listKills.push(element)
			console.log("Stats" , list)
		// })


			// if(list.length >= 200){	
			// 	console.log( "during listkills" , this.listKills)
			// 	setTimeout( () => { 	this.getKills(page + 1) }, 1450 );
			// }	
			// else{	
			// 	 console.log( "ended listkills" , this.listKills)
			// }
		})
		.catch(function (err) {
		console.warn('Something went wrong.', err);
		});
	}




	getKills(page : number){
		let  swaggerUrl =   "http://localhost:4200/zapi" + "kills/characterID/"  +  this.listPerson[0].id+ "/page/" + page +"/" ; // + + "/losses/page/1/"
		fetch( swaggerUrl)
		.then(function (response) {
			return response.text();
	   	})
		.then( (data : any) => {
	 		let list : any = JSON.parse(data);


			//this.listKills.push(list)

			list.forEach( (element  : any) =>{
				this.listKills.push(element)
			console.log("ELEMENT kill" , element)
		})


			if(list.length >= 200){	
				console.log( "during listkills" , this.listKills)
				setTimeout( () => { 	this.getKills(page + 1) }, 1450 );
			}	
			else{	
				 console.log( "ended listkills" , this.listKills)
			}
		})
		.catch(function (err) {
		console.warn('Something went wrong.', err);
		});
	}


	getLosses(page : number){
		let  swaggerUrl =   "http://localhost:4200/zapi" + "losses/characterID/"  +  this.listPerson[0].id+ "/page/" + page +"/" ;
		fetch( swaggerUrl)
		.then(function (response) {
				return response.text();
	   	})
	   	.then( (data : any) => {
	 		let list : any = JSON.parse(data);
	 		console.log("SIZE Losses" , list.length	)

			list.forEach( (element  : any) =>{
					this.listLosses.push(element)
				console.log("ELEMENT LOSS" , element)
			})


			//this.listLosses.push(list)
	 		if(list.length >= 200){
				console.log( "during listlosses" , this.listLosses)
				setTimeout( () => { 	this.getLosses(page + 1) }, 1350 );
	 		}
	 		else{
			console.log( "ended listlosses" , this.listLosses)
			}})
			.catch(function (err) {
			console.log( err , "1SMIIILEEEE"  ,  );
		 // There was an error
				console.warn('Something went wrong.', err);
	   	});
	}

	getInfosabout() {
		this.listKills = [];
		this.listLosses = [];

		setTimeout( () => { 	this.getLosses( 1) }, 1000 );
		setTimeout( () => { 	this.getKills( 1) }, 3000 );
	}


}