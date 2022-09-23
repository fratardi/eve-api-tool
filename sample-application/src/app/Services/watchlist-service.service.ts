import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {




  listPerson : any = []

  constructor(private http: HttpClient) { }

  updateList(item : any ){


    this.listPerson.push(item)
    console.log("from Service",item , this.listPerson)
  }








  getInfosabout()
  {


    console.log("BEFORE YOLO ")
   let  swaggerUrl =   "http://localhost:4200/search" + "/1363236736/losses/page/2/"




   fetch("http://localhost:4200/search" + "/1363236736/losses/page/2/").then(function (response) {
    // The API call was successful!
    return response;
  }).then(function (data : any) {

    
    // const parser = new DOMParser();
    // const document = parser.parseFromString(data, "text/html");
    data.body.read().then(
      (e : any) => {console.log("read e  = " , e )}

    )


    // This is the JSON from our response
   console.log( "2SMIIILEEEE"  , data.body, "]]" );
  }).catch(function (err) {
    console.log( err , "1SMIIILEEEE"  ,  );
    // There was an error
    console.warn('Something went wrong.', err);
  });






  //   this.http.get<any>(swaggerUrl )
	// .subscribe((data : any ) => {



  //   let html : any  = data;








  //   const parser = new DOMParser();
  //   const document = parser.parseFromString(data, "text/html");

	// //	this.Swagger = data
  //   console.log("data" , data  , document)
	// })}

 

}





}