import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {


  listPerson : any = []

  constructor() { }


  updateList(item : any ){

    this.listPerson.push(item)
    console.log("from Service",item , this.listPerson)
  }

}
