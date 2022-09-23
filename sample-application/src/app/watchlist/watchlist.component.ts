import { Component, OnInit } from '@angular/core';
import { WatchlistServiceService } from '../Services/watchlist-service.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.less']
})
export class WatchlistComponent implements OnInit {

  constructor(

   watchlist : WatchlistServiceService 

  ) { }

  ngOnInit(): void {
  }

}
