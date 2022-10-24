import { Component, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';
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
	) { 
		this.watchlist = watchListService.listPerson
	}

	getUserStats(){
	}

	passOverList(){
//		console.log(this.watchListService.listKills);
		this.watchListService.listKills.forEach((element : any) => {
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