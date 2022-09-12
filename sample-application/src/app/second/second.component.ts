import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.less']
})
export class SecondComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    let code = 0;

    console.log( "this = " , this, window.location.search[6] );

  }

}
