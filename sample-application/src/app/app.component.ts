import { Component } from '@angular/core';

import { WebsocketChatService } from './websocketchat.service';
import { ChatService } from './chatservice.service';


export interface Report {

  alliance_id: string,
  character_id: string,
  corporation_id: string,
  damage_done: string,
  final_blow: string,
  security_status: string,
  ship_type_id: string,
  weapon_type_id: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
,
  providers: [
    WebsocketChatService,
    ChatService
  ],
  })
export class AppComponent {

  title = 'sample-application';

  constructor(
    ) {

  }

}