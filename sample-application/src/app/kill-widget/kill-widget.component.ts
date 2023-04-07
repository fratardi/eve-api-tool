import { Component, Input, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

interface truc
{
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

  constructor(
   private  eveEsiService : EveEsiService
  ) {}

  ngOnInit(): void {
    console.log("init widget ", this.data)
    this.zKillReport = this.data as unknown as truc;
    this.getKillReport();
//


	this.eveEsiService.getKillHashId( this.data).subscribe(e =>{

    console.log("Subscription ok"    , e  )


  })
   // this.collectIds(this.zKillReport, this.itemIds); // Collect IDs and store them in itemIds array
  }

  lol()
  {
  //  this.zKillReport     = this.data as unknown as truc;
  //  this.getKillReport();
  //  console.log(this.solvedTabs[0] , this.zKillReport);
   // this.final .push (this.solvedTabs[0]);//+  this.zKillReport;
 //this.resolveIds(  this.zKillReport, this.solvedTabs[0])
	// this.getKillReport
    // this.final = this.resolveIds(this.zKillReport, this.solvedTabs[0]);
    // console.log( this.final)


	console.log(this. data);
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
    // if (obj.zkb && obj.zkb.locationID !== null) {
    //   ids.push(obj.zkb.locationID);
    // }
  //  console.log ( "Sometext dsdsd" , this.eveEsiService.getNamesInfoFromId(this.removeDuplicates(ids)))
  //  this.solvedTabs.push( this.eveEsiService.getNamesInfoFromId(this.removeDuplicates(ids)))
  this.eveEsiService.getNamesInfoFromId(this.removeDuplicates(ids)).subscribe((data: string[]) => {
    console.log("getNamesInfoFromId(" , data);
    this.solvedTabs.push(data);
  });
    console.log("Solved", this.solvedTabs)
  }


//   resolveIds(unresolved: any, solved: any): any {
//     let resolved: any = {};

//     for (const key in unresolved) {
//         if (Array.isArray(unresolved[key])) {
//             resolved[key] = [];
//             for (let i = 0; i < unresolved[key].length; i++) {
//                 if (typeof unresolved[key][i] === "object") {
//                     resolved[key].push(this.resolveIds(unresolved[key][i], solved));
//                 } else {
//                     resolved[key].push(solved[unresolved[key][i]] || unresolved[key][i]);
//                 }
//             }
//         } else if (typeof unresolved[key] === "object") {
//             resolved[key] = this.resolveIds(unresolved[key], solved);
//         } else {
//             resolved[key] = solved[unresolved[key]] || unresolved[key];
//         }
//     }
//     return resolved;
// }

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

  return resolved;
}





removeDuplicates(arr: any[]): any[] {
    return Array.from(new Set(arr));
  }



}
