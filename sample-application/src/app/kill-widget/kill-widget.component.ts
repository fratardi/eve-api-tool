import { Component, Input, OnInit } from '@angular/core';



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

  valeur :truc | undefined;


  constructor() {
   

   }

  ngOnInit(): void {
    console.log( "MICHaEL" ,this.data)

    this.valeur     = this.data as unknown as truc;
  }

  lol()
  {
    this.valeur     = this.data as unknown as truc;
  }


  setDestination()
  {
   
   // this.valeur = this.data as truc;

    console.log(this.valeur?.solar_system_id);

  }


}
