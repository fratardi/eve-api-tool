import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kill-widget',
  templateUrl: './kill-widget.component.html',
  styleUrls: ['./kill-widget.component.less']
})

export class KillWidgetComponent implements OnInit {


  @Input() data: string[] | undefined;

 item: any ;
 book : any ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
