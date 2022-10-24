import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebsocketChatService } from './websocketchat.service';

const CHAT_URL = 'wss://zkillboard.com/websocket/';

export interface Message {
  action: string;
  channel: string;
}

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

@Injectable()
export class ChatService {

  public messages: Subject<Message>;
  constructor(wscService: WebsocketChatService) {
    this.messages = <Subject<Message>>(
      wscService.connect(CHAT_URL).pipe(map((response: MessageEvent): any => {
        let truc : Report[] = response.data
//        console.log("-------------------------------------", JSON.parse(truc as any),"------------------------------");
        return {
          truc
        };
      }))
    );
  }
}