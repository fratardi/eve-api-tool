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

  hasInit : boolean = false;

  constructor(
   private  eveEsiService : EveEsiService
  ) {}

  ngOnInit(): void {
    console.log("init widget ", this.data)
    this.zKillReport = this.data as unknown as truc;
    this.getKillReport();
    this.collectIds(this.zKillReport, this.itemIds); // Collect IDs and store them in itemIds array
  }

  lol()
  {
    this.zKillReport     = this.data as unknown as truc;
    this.getKillReport();
    console.log(this);
  }

  getKillReport(){
    this.hasInit = true;
    //  this.eveKillReport =  this.eveEsiService.getCCPKillReport(this.zKillReport?.killmail_id , this.zKillReport?.zkb.hash );
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


removeDuplicates(arr: any[]): any[] {
    return Array.from(new Set(arr));
  }

}
