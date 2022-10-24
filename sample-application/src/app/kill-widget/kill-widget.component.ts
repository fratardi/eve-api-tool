import { Component, Input, OnInit } from '@angular/core';
import { EveEsiService } from '../Services/eve-esi.service';

interface truc
{
  solar_system_id : any,
  killmail_time   : any,
  killmail_id     : any,
  attackers       : any,
  victim          : any,
  zkb             : any,
}

@Component({
  selector    : 'app-kill-widget',
  templateUrl : './kill-widget.component.html',
  styleUrls   : ['./kill-widget.component.less']
})

export class KillWidgetComponent implements OnInit {


  @Input() data: any[] | undefined;

  eveKillReport : any;
  zKillReport   : truc | undefined;
  systemName    : any;
  hasInit       : boolean = false;

  constructor(
   private  eveEsiService : EveEsiService
  ) {}

  ngOnInit(): void {
//    console.log( "init widget " ,this.data)
    this.zKillReport     = this.data as unknown as truc;
    this.getKillReport();
  }

  lol() {
    this.zKillReport     = this.data as unknown as truc;
//    console.log("YOLOORORORO", this.getKillReport())
    this.getKillReport();
//    console.log(this);
  }

  getKillReport() {
    this.hasInit    = true;
    let hello       = this.eveKillReport =  this.eveEsiService.getCCPKillReport(this.zKillReport?.killmail_id , this.zKillReport?.zkb.hash );
    this.systemName = this.eveEsiService.getNamesFromIds([this.zKillReport?.solar_system_id, 0])
//  console.log("😋" , this.zKillReport?.zkb.url , hello)
  }

  setDestination() {
//    console.log("HEHEHE", this.eveKillReport);
    // report.forEach((element : any) => { 
    //   console.log( "Element == "  , element)
    // })
   // console.log(this.eveKillReport);
  }

  goToLink(url: string){
//  console.log("YOLO" ,this )
    window.open(url, "_blank");
  }

}