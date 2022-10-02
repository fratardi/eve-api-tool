import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { delay } from 'rxjs';
import { EveEsiService } from './eve-esi.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {

	listPerson	: any[]	   = []
	listKills	: any[] = [];
	listLosses	: any[] = [];
	list: any;
	zApi : string = "http://localhost:4200/zapi"

	constructor(
		private http		:	HttpClient,
		private esi_service : 	EveEsiService,	
	) { }

	updateList(item : any ){
		this.listPerson.pop();
		this.listPerson.push(item)
	//	console.log("from Service",item , this.listPerson , "https://zkillboard.com/api/stats/characterID/844646062/")
		this.getStats();
	}

	removeWatchee(){
		this.listPerson.pop();
		this.listKills = [];
		this.listLosses = [];
	//	console.log("from Service pop" , this.listPerson)
 	}

	getkillHash(parameter : any )	{
 		console.log(  "getkillhash", parameter)
	}

	getStats(){
		let  swaggerUrl =  this.zApi + "stats/characterID/"  +  this.listPerson[0].id+ "/";
		fetch( swaggerUrl)
		.then(function (response) {
			return response.text();
	   	})
		.then( (data : any) => {
	 		let list : any = JSON.parse(data);
			console.log("Stats" , list)
		})
		.catch(function (err) {
		console.warn('Something went wrong.', err);
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
				console.log("ELEMENT kill" , element)
			})
			if(list.length >= 200)	{	
				console.log( "during listkills" , this.listKills)
				setTimeout( () => { 	this.getKills(page + 1) }, 1450 );
			}	
			else	{	
				 console.log( "ended listkills" , this.listKills)
			}
		})
		.catch(function (err) {
		console.warn('Something went wrong.', err);
		});
	}


	getLosses(page : number){
		let  swaggerUrl =   this.zApi + "losses/characterID/"  +  this.listPerson[0].id+ "/page/" + page +"/" ;
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
		this.listKills	= [];
		this.listLosses	= [];
		setTimeout( () => {	this.getLosses( 1) }, 1000 );
		setTimeout( () => {	this.getKills( 1) }, 3000 );
	}


}