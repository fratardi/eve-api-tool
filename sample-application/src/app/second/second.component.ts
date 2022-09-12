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
      "Authorization": "Basic <Base64 encoded credentials>",
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "login.eveonline.com"
    }

      
    console.log( "this = " , this, window.location.search.substring(6, window.location.search.length) );
    let  authorization_code  = window.location.search.substring(6, window.location.search.length);
   //  base-64 encoded string of {client id}:{client_secret}. 

    const body = encoded;
    //JSON.stringify(window.location.search);


 let formEncodedValue = "grant_type=authorization_code&code="+  authorization_code;
// let string =  "{
//   "grant_type":"authorization_code",
//   "code":"{the authorization code}"
// }";


   // this.http.post(,  header : "Content-Type:application/json" )

    this.http.post('https://login.eveonline.com/v2/oauth/token', body,{'headers':headers}).subscribe(data => console.log(data))
// https://login.eveonline.com/v2/oauth/token

 
  

}
}