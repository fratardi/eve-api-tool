import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WatchlistServiceService {

	stats 		:	any;
	listPerson	:	any[]	= [];
	listKills	:	any[] 	= [];
	listLosses	:	any[] 	= [];
	zApi 		:	string 	= "http://localhost:4200/zapi";
	list		:	any;

	constructor() 
	{}

	updateList(item : any)	{
		this.listPerson.pop();
		this.listPerson.push(item)
		this.getStats();
	}

	removeWatchee(){
		this.listPerson.pop();
		this.listKills	= [];
		this.listLosses = [];
 	}

	getkillHash(parameter : any)	{
// 		console.log(  "getkillhash", parameter)
	}

	getStats(){
		let  swaggerUrl =  this.zApi + "stats/characterID/"  +  this.listPerson[0].id+ "/";
		fetch( swaggerUrl)
		.then(function (response) {
			return response.text();
	   	})
		.then( (data : any) => {
	 		let list : any = JSON.parse(data);
//			console.log("Stats" , list)
			this.stats = list;
		})
		.catch(function (err) {
//		console.warn('Something went wrong.', err);
		});
	}

	getKills(page : number){
		let  swaggerUrl =   this.zApi + "kills/characterID/"  +  this.listPerson[0].id+ "/page/" + page +"/";
		fetch( swaggerUrl)
		.then(function (response) {
			return response.text();
	   	})
		.then( (data : any) => {
	 		let list : any = JSON.parse(data);
			list.forEach( (element  : any) =>{
				this.listKills.push(element)
//				console.log("ELEMENT kill" , element)
			})
			if(list.length >= 200)	{
//				console.log( "during listkills" , this.listKills)
				setTimeout( () => {	this.getKills(page + 1) }, 1450 );
			}
			else	{
//				 console.log( "ended listkills" , this.listKills)
			}
		})
		.catch(function (err) {
//		console.warn('Something went wrong.', err);
		});
	}


	getLosses(page : number){
		let  swaggerUrl = this.zApi + "losses/characterID/" + this.listPerson[0].id+ "/page/" + page +"/" ;
		fetch(swaggerUrl)
		.then(function (response) {
				return response.text();
	   	})
	   	.then( (data : any) => {
	 		let list : any = JSON.parse(data);
//	 		console.log("SIZE Losses" , list.length	)
			list.forEach( (element  : any) =>{
				this.listLosses.push(element)
//				console.log("ELEMENT LOSS" , element)
			})
	 		if(list.length >= 200){
//				console.log( "during listlosses" , this.listLosses)
				setTimeout( () => { 	this.getLosses(page + 1) }, 1350 );
	 		}
	 		else{
//				console.log( "ended listlosses" , this.listLosses)
			}})
			.catch(function (err) {
//				console.log(err, "1SMIIILEEEE");
//				console.warn('Something went wrong.', err);
	   	});
	}

	getInfosabout() {
		this.listKills	= [];
		this.listLosses	= [];
		setTimeout( () => {	this.getLosses(1)}, 1000 );
		setTimeout( () => {	this.getKills(1)}, 3000 );
	}

}