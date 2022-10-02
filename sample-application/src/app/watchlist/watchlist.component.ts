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


  getUserStats(){

    console.log("GetUserStats ", this)
  }

  passOverList()
  {
    console.log(this.watchListService.listKills);
    this.watchListService.listKills.forEach((element : any) => {
      console.log("YOLO" , element) 
      this.watchListService.getkillHash(element)
    })
  }

  getKillIds() {
    this.watchListService.getInfosabout();
  }

  removeFromWatchlist(){
    this.watchListService.removeWatchee();
  }


  ngOnInit(): void {

  }

}




