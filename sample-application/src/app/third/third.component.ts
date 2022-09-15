import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {

  constructor( private esi_service : EveEsiService,
    private http: HttpClient
    
    ) { }

  truc()
  {

    let   userOwn : any = this.esi_service.getUserOwn();
    let character_id = "91493392";


    this.http.get(`http://localhost:4200/latest/v2/characters/${character_id}/corporationhistory/`)

    console.log(userOwn , " third")


  }


  ngOnInit(): void {
    this.truc();

  }

}
