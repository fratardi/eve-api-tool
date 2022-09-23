import { Component, OnInit } from '@angular/core';
import { WatchlistServiceService } from '../Services/watchlist-service.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.less']
})
export class WatchlistComponent implements OnInit {


  watchlist : any = [];

  constructor(

   private watchListService : WatchlistServiceService 

  ) { this.watchlist = watchListService.listPerson}


  // setInterval(   ()=>  this.updater() , 1000  / 24  )

  updater (){
    console.log("updater", this.watchlist)

  
  }





  ngOnInit(): void {

    this.watchListService.listPerson.subscribe((e: any) =>{console.log( "sub",  e)})

    console.log(this.watchlist)
  //  setInterval(   ()=>  this.updater() , 1000    )



  }

}




