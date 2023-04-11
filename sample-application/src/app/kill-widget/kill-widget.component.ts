import { Component, Input, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';
import { bufferTime } from 'rxjs';



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
	resolvedList : any[] = [];
	processedAttack: any = [];
	attackerSolved : any = [];
	filterCharacter: string = '';
	filterAlliance: string = '';
	filterCorporation: string = '';
	//itemsSolved : any = [];
	sortColumn: string = 'damage_done';
	sortAscending: boolean = true;


	victimSolved : any = [];
	itemSolved : any = [];
	constructor(
	 private  eveEsiService : EveEsiService
	) {}

	ngOnInit(): void {
		console.log("init widget ", this.data)
		this.zKillReport = this.data as unknown as truc;

		this.eveEsiService.getKillHashId( this.data).subscribe(e =>{
		console.log("Subscription ok"    , e  )
		this.eveKillReport =e 
		this.eveEsiService.getNamesInfoFromId(this.removeDuplicates( this.collectIds( e  , this.itemIds)))
			.subscribe((data: string[]) => {
				console.log("getNamesInfoFromId(" , data);
				this.solvedTabs.push(data);
				this.attackerSolved 	= this. generateAttackBattleReportSummary(this.eveKillReport, [data]);
				this.victimSolved 		= this. generateVictimBattleReportSummary(this.eveKillReport, data);
				this.itemSolved 		= 	this.generateItemSummary(this.eveKillReport , data)

				this.processedAttack =  this.attackerSolved;
			});
    		console.log('processedKillReport:', this.processedAttack);
	})
	}

	generateItemSummary(data: any, names: any) : any[] 
	{
		let  returnValue : any[] = []; 
		console.log('generateItemSummary(' , data.victim.items , names); 
		// console.log(data , names)
		data.victim.items.forEach((element  : any)=> {
			names.forEach((name : any)  => {
			//	console.log( "😑",name , element )
				if(name.id == element.item_type_id)	{
					element.name = name.name
					returnValue.push(element )
				}
			});
		})
		console.log( "[][]", returnValue);
		return(returnValue)
	}

	lol(){
			console.log(this);
	}

	getSortedAndGroupedAttackers(): any[] {
		if (!Array.isArray(this.processedAttack)) {
		  return [];
		}
	  
		// Sort the attackers first
		const sortedAttackers = [...this.processedAttack];
		sortedAttackers.sort((a, b) => {
		  if (this.sortAscending) {
			return a[this.sortColumn] - b[this.sortColumn];
		  } else {
			return b[this.sortColumn] - a[this.sortColumn];
		  }
		});
	  
		// Group the attackers by alliance name
		const groupedAttackers = sortedAttackers.reduce((groups, attacker) => {
		  const allianceName = attacker.alliance?.name || 'N/A';
		  if (!groups[allianceName]) {
			groups[allianceName] = [];
		  }
		  groups[allianceName].push(attacker);
		  return groups;
		}, {});
	  
		// Flatten the grouped attackers into an array
		const sortedAndGroupedAttackers = [];
		for (const groupName in groupedAttackers) {
		  sortedAndGroupedAttackers.push(...groupedAttackers[groupName]);
		}
	  
		return sortedAndGroupedAttackers;
	  }



// Add this method to your component class
isMatch(item: any): boolean {
	const characterMatch = !this.filterCharacter || item.character?.name?.toLowerCase().includes(this.filterCharacter.toLowerCase());
	const allianceMatch = !this.filterAlliance || item.alliance?.name?.toLowerCase().includes(this.filterAlliance.toLowerCase());
	const corporationMatch = !this.filterCorporation || item.corporation?.name?.toLowerCase().includes(this.filterCorporation.toLowerCase());
  
	return characterMatch && allianceMatch && corporationMatch;
  }

	generateVictimBattleReportSummary(data: any, names: any) 
	{
		console.log(  "generateVictimBattleReportSummary(", data , names )
		let  returnValue : any =[]; 
		names.forEach((item : any) => {
		//	console.log(item.id , data.victim.alliance_id)
			if(item.id == data.victim.character_id)	
				returnValue.character = item;
			if(item.id == data.victim.alliance_id)	
				returnValue.alliance = item;
			if(item.id == data.victim.corporation_id)	
				returnValue.corporation = item;
			if(item.id == data.victim.ship_type_id)	
				returnValue.ship = item;
			 if(item.id == data.solar_system_id )	
			 returnValue.location = item;
	
		})
		returnValue.damage = data.victim.damage_taken
		console.log(  "🐸returnValue", returnValue)
		return  returnValue

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
							if(ligne.category =="inventory_type" && element.ship_type_id == ligne.id)
								attacker.ship= ligne
							if(ligne.category =="alliance"&& element.alliance_id == ligne.id)
								attacker.alliance = ligne
					});
				} )
				returnValue.push(attacker)
		});
		console.log(  "🤳returnValue", returnValue)
		return  returnValue
	}

	isCharacterMatch(item: any): boolean {
		if (!this.filterCharacter) {
		  return true;
		}
	  
		return item.character?.name?.toLowerCase().includes(this.filterCharacter.toLowerCase());
	  }
	setDestination()
	{
		this.eveEsiService.setDestination(this.data)
		console.log(this);
	}

	collectIds(obj: any, ids: number[]): any {
		if (obj.attackers && Array.isArray(obj.attackers)) {
			for (const attacker of obj.attackers) {
				if (attacker.character_id) 
					ids.push(attacker.character_id);
				if (attacker.corporation_id)
					ids.push(attacker.corporation_id);
				if (attacker.ship_type_id)
					ids.push(attacker.ship_type_id);
				if (attacker.weapon_type_id)
					ids.push(attacker.weapon_type_id);
				if (attacker.alliance_id)
					ids.push(attacker.alliance_id);
			}
		}
		if (obj.solar_system_id) {
			ids.push(obj.solar_system_id);
		}
		if (obj.victim) {
			if (obj.victim.character_id)
				ids.push(obj.victim.character_id);
				if (obj.victim.alliance_id)
				ids.push(obj.victim.alliance_id);
			if (obj.victim.corporation_id)
				ids.push(obj.victim.corporation_id);
			if (obj.victim.ship_type_id)
				ids.push(obj.victim.ship_type_id);
			if (obj.victim.items && Array.isArray(obj.victim.items)) {
				for (const item of obj.victim.items) {
					if (item.item_type_id) ids.push(item.item_type_id);
				}
			}
		}
		return(ids)
	}

	toggleSortOrder(): void {
		this.sortAscending = !this.sortAscending;
	}

	removeDuplicates(arr: any[]): any[] {
		return Array.from(new Set(arr));
	}

	setSortColumn(column: string): void {
		if (this.sortColumn === column) {
		  this.sortAscending = !this.sortAscending;
		} else {
		  this.sortColumn = column;
		  this.sortAscending = true;
		}
	  }


	  getSortedAttackers(): any[] {
		if (!Array.isArray(this.processedAttack)) {
		  return [];
		}
	  
		// Make a copy of the processedAttack array
		const sortedAttackers = [...this.processedAttack];
	  
		// Define the sorting logic for each column
		const sortLogic : any = {
		  alliance: (a: any, b: any) => (a.alliance?.name || '').localeCompare(b.alliance?.name || ''),
		  corporation: (a: any, b: any) => (a.corporation?.name || '').localeCompare(b.corporation?.name || ''),
		  character: (a: any, b: any) => (a.character?.name || '').localeCompare(b.character?.name || ''),
		  ship: (a: any, b: any) => (a.ship?.id || '').localeCompare(b.ship?.id || ''),
		  item: (a: any, b: any) => ((a.item?.id !== a.ship?.is ? a.item?.id : '') || '').localeCompare((b.item?.id !== b.ship?.id ? b.item?.id : '') || ''),
		  damage_done: (a: any, b: any) => a.damage_done - b.damage_done,
		};
	  
		// Update the sorting logic according to the selected sort column
		sortedAttackers.sort((a, b) => {
		  const sortResult = sortLogic[this.sortColumn](a, b);
		  return this.sortAscending ? sortResult : -sortResult;
		});
	  
		return sortedAttackers;
	  }


}
