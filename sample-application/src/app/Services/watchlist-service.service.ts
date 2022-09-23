import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {




  listPerson : any = []

  constructor() { }


  updateList(item : any ){

    let html : any  = [];
    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html");

    this.listPerson.push(item)
    console.log("from Service",item , this.listPerson)
  }









}
