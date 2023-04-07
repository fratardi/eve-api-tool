import { Component, Input, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';
import { bufferTime } from 'rxjs';

interface truc{
	attackers: any,
	killmail_id :  any,
	killmail_time : any,
	solar_system_id :any,
	victim : any,
	zkb :any,
}

interface truc {
	attackers: any,
	killmail_id: any,
	killmail_time: any,
	solar_system_id: any,
	solar_system_name: string,
	victim: any,
	zkb: any,
}

@Component({
	selector: 'app-kill-widget',
	templateUrl: './kill-widget.component.html',
	styleUrls: ['./kill-widget.component.less']
})

export class KillWidgetComponent implements OnInit {
	@Input() data: any[] | undefined;
	itemIds: number[] = []; // array to store item IDs
	zKillReport :truc | undefined;
	eveKillReport: any;
	//itemIds: number[] = []; // array to store item IDs
	solvedTabs: any[] = [];
	final : any = {};
	hasInit : boolean = false;
	resolvedList : any = [];
	processedKillReport: any;
	attackerSolved : any = [];

	constructor(
	 private  eveEsiService : EveEsiService
	) {}

	ngOnInit(): void {
		console.log("init widget ", this.data)
		this.zKillReport = this.data as unknown as truc;
		this.getKillReport();
		this.eveEsiService.getKillHashId( this.data).subscribe(e =>{

		console.log("Subscription ok"    , e  )
		this.eveKillReport =e 
		 this.collectIds( e  , this.itemIds)
		
    console.log('processedKillReport:', this.processedKillReport);


	})
	 // this.collectIds(this.zKillReport, this.itemIds); // Collect IDs and store them in itemIds array
	}


	resolveIds(unresolved: any, solved: any): any {
		const resolved: any = {};

		for (const key in unresolved) {
			if (unresolved.hasOwnProperty(key)) {
				if (Array.isArray(unresolved[key])) {
					resolved[key] = unresolved[key].map((item: any) => {
						if (typeof item === "object") {
							return this.resolveIds(item, solved);
						} else {
							return solved[item] || item;
						}
					});
				} else if (typeof unresolved[key] === "object") {
					resolved[key] = this.resolveIds(unresolved[key], solved);
				} else {
					resolved[key] = solved[unresolved[key]] || unresolved[key];
				}
			}
		}
	//	console.log("resol ved ", resolved , "💖💖💖💖😘😘😘")
		this.resolvedList.push(resolved)
		return resolved;
	}


	lol()
	{
	//	console.log("α" ,JSON.stringify(this.eveKillReport), "δ" ,JSON.stringify(this.solvedTabs));
		//const linkedJson = this. generateAttackBattleReportSummary(this.eveKillReport, this.solvedTabs);
			console.log(this.processedKillReport);
	}

	generateAttackBattleReportSummary(data: any, names: any) : any[] {
	let  returnValue : any[] = []; 
		data.attackers.forEach((element  : any)=> {
				let attacker  = element;
				names.forEach((bud : any )=>{

					bud.forEach((ligne : any) => {
							if(ligne.category =="character" && element.character_id == ligne.id)
								attacker.character = ligne
							if(ligne.category =="solar_system" && element.solar_system_id == ligne.id)
								attacker.solar_system = ligne;
							if(ligne.category =="corporation"  &&  element.corporation_id == ligne.id )
								attacker.corporation  = ligne
							if(ligne.category =="inventory_type" && element.weapon_type_id == ligne.id)
								attacker.item = ligne
							if(ligne.category =="alliance"&& element.alliance_id == ligne.id)
								attacker.alliance = ligne
					});
				} )
				returnValue.push(attacker)
		});
		console.log(  "🤳returnValue", returnValue)
		return  returnValue
	}

	getKillReport(){
		this.hasInit = true;
			// this.eveKillReport =  this.eveEsiService.getCCPKillReport(this.zKillReport?.killmail_id , this.zKillReport?.zkb.hash );
	}

	setDestination()
	{
		this.eveEsiService.setDestination(this.data)
		console.log(this);
	}

	collectIds(obj: any, ids: number[]): void {
		if (obj.attackers && Array.isArray(obj.attackers)) {
			for (const attacker of obj.attackers) {
				if (attacker.character_id) ids.push(attacker.character_id);
				if (attacker.corporation_id) ids.push(attacker.corporation_id);
				if (attacker.ship_type_id) ids.push(attacker.ship_type_id);
				if (attacker.weapon_type_id) ids.push(attacker.weapon_type_id);
				if (attacker.alliance_id) ids.push(attacker.alliance_id);
			}
		}
		if (obj.solar_system_id) {
			ids.push(obj.solar_system_id);
		}
		if (obj.victim) {
			if (obj.victim.character_id) ids.push(obj.victim.character_id);
			if (obj.victim.corporation_id) ids.push(obj.victim.corporation_id);
			if (obj.victim.ship_type_id) ids.push(obj.victim.ship_type_id);

			if (obj.victim.items && Array.isArray(obj.victim.items)) {
				for (const item of obj.victim.items) {
					if (item.item_type_id) ids.push(item.item_type_id);
				}
			}
		}
		this.eveEsiService.getNamesInfoFromId(this.removeDuplicates(ids))
			.subscribe((data: string[]) => {
				console.log("getNamesInfoFromId(" , data);
				this.solvedTabs.push(data);
				this.resolveIds( this.eveKillReport , this.solvedTabs  ) 
				this.attackerSolved = this. generateAttackBattleReportSummary(this.eveKillReport, this.solvedTabs);
				this.processedKillReport = this.attackerSolved
			});

		console.log("Solved", this.attackerSolved)
	}

	removeDuplicates(arr: any[]): any[] {
		return Array.from(new Set(arr));
	}

}
