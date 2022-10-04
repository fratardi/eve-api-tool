import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kill-widget',
  templateUrl: './kill-widget.component.html',
  styleUrls: ['./kill-widget.component.less']
})

export class KillWidgetComponent implements OnInit {


  @Input() data: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
