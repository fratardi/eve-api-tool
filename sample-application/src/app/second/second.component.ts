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

  //  let code = 0;
    const headers = { 'Content-Type': 'application/json'}  
 


    console.log( "this = " , this, window.location.search.substring(6, window.location.search.length) );
    const body =JSON.stringify(window.location.search);

 let    client_id = window.location.search.substring(6, window.location.search.length);
      



   // this.http.post(,  header : "Content-Type:application/json" )

    this.http.post('https://login.eveonline.com/v2/oauth/token', body,{'headers':headers}).subscribe(data => console.log(data))


  // https://https://esi.evetech.net/oauth/token

  

}
}