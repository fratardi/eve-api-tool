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


	getInfosabout() {
		this.listKillIds = [];
   		let  swaggerUrl =   "http://localhost:4200/search" + "/" + this.listPerson[0].id + "/losses/page/1/"
   		fetch( swaggerUrl)
   		.then(function (response) {
		//   console.log("RESPONSE",response)
		// The API call was successful!
			return response.text();
  		})
  		.then( (data : any) => {
			let x = 0 ;
			data = data as string[];
			data.split('<a href="/kill/')
				.forEach((element : string) => {
					if( x % 2 )  {
			  			let e = element.slice(0, 10).slice(0 , -2) as string ;
			  			this.listKillIds.push(e);
					}
					x++;
				})	
				console.log(this.listKillIds)
				 //  console.log( "2SMIIILEEEE]]" , wrapper);
  		}).catch(function (err) {
			console.log( err , "1SMIIILEEEE"  ,  );
				// There was an error
			console.warn('Something went wrong.', err);
 		 });
	}


}