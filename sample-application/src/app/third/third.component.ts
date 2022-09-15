import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {

  constructor( private esi_service : EveEsiService) { }

  truc()
  {

    let   userOwn : any = this.esi_service.getUserOwn();


    console.log(userOwn , " third")

  }


  ngOnInit(): void {


  }

}
