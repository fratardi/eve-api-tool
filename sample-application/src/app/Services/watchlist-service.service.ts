import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {




  listPerson : any = []

  constructor(private http: HttpClient) { }

  updateList(item : any ){

    this.listPerson.pop();
    this.listPerson.push(item)
    console.log("from Service",item , this.listPerson)
  }

  getInfosabout()
  {


    console.log("BEFORE YOLO ", this.listPerson[0].id)
   let  swaggerUrl =   "http://localhost:4200/search" + "/" + this.listPerson[0].id + "/losses/page/1/"

   fetch( swaggerUrl)
   .then(function (response) {
    console.log("RESPONSE",response)
    // The API call was successful!
    return response.text();
  })
  .then(function (data : any) {

   // const parser = new DOMParser();
  //  const xmlString =  data.body
   // const doc1 = parser.parseFromString(xmlString,"text/html");

    var html =data;
    var parser = new DOMParser();
    var wrapper = parser.parseFromString(html, "text/html");
    wrapper.getElementsByTagName('li');


    console.log();
    data = data as string[];


data.split('<a href="/kill/').forEach((element : string) => {



      console.log( "😢😢😢", element.slice(0, 10), "😢😢👌")

    })

 //  console.log( "2SMIIILEEEE]]" , wrapper);
  }).catch(function (err) {

    console.log( err , "1SMIIILEEEE"  ,  );
    // There was an error
    console.warn('Something went wrong.', err);

  });


 

}





}