import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// express = require('express');
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.less']
})
export class SecondComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }



  // curl -XPOST -H "Content-Type:application/json" -H "Authorization:Basic Y2xpZW50X2lkOmNsaWVudHNlY3JldDE=" 
  // -d '{"grant_type":"authorization_code", "code":"ckEZIa6JUOdoN6ijmqBI...qgpU-SmPsZ0"}' 



  // https://login.eveonline.com/oauth/token



  ngOnInit(): void {

   let secretKey  =  "jcVXo0IZFt5YDr8AJ3Z7cKCDfVijNxKhupOKCQ2I"
   let  client_id ="7f45c8124b2640beba3a6902df6832a2";
   let toEncode   = client_id + ":" + secretKey

let encoded  = btoa(toEncode)

   //toEncode.toString('base64')
     console.log(  "ENCODED " ,  btoa(toEncode));


     const headers = { 
      "Authorization": "Basic " + encoded.slice(0, -1),
      "Content-Type": "application/x-www-form-urlencoded",
      // "Host": "login.eveonline.com",
      // "Access-Control-Allow-Origin": "*"
    }

      
    console.log( "this = " , this, window.location.search.substring(6, window.location.search.length) );
    let  authorization_code  = window.location.search.substring(6, window.location.search.length);
   //  base-64 encoded string of {client id}:{client_secret}. 

    const body = encoded.toString();
    //JSON.stringify(window.location.search);


 let formEncodedValue = "grant_type=authorization_code&code="+  authorization_code;

    console.log(formEncodedValue);

// let string =  "{
//   "grant_type":"authorization_code",
//   "code":"{the authorization code}"
// }";

 //   curl -XPOST -H "Content-Type:application/json" -H "Authorization:Basic 6316r0k1zPFjozFC0dH0gcux6ahu4mGSXi-59JdeN1LuX4ylWNE4cNykqy3KQrn4=" -d '{"grant_type":"authorization_code", "code":"N2Y0NWM4MTI0YjI2NDBiZWJhM2E2OTAyZGY2ODMyYTI6amNWWG8wSVpGdDVZRHI4QUozWjdjS0NEZlZpak54S2h1cE9LQ1EySQ"}' https://login.eveonline.com/v2/oauth/token




   // this.http.post(,  header : "Content-Type:application/json" )

    this.http.post('https://login.eveonline.com/v2/oauth/token',
     body,
     {headers})
    .subscribe(data => console.log("DATA  = ",data))
// https://login.eveonline.com/v2/oauth/token

 
  

}
}