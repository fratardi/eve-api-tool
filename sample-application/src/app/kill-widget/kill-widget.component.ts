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

  zKillReport :truc | undefined;
  eveKillReport: any;

  hasInit : boolean = false;

  constructor(
   private  eveEsiService : EveEsiService
  ) {}

  ngOnInit(): void {
    console.log( "init widget " ,this.data)



    this.zKillReport     = this.data as unknown as truc;

    this.getKillReport(   );

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


}
