import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebsocketChatService } from './websocketchat.service';

const CHAT_URL = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';

export interface Message {
  user: string;
  messageContent: string;
}

@Injectable()
export class ChatService {
  public messages: Subject<Message>;

  constructor(wscService: WebsocketChatService) {
    this.messages = <Subject<Message>>(
      wscService.connect(CHAT_URL).pipe(map((response: MessageEvent): Message => {
       // let content = JSON.parse(response.data);
        return {
          user: "content.user",
          messageContent: "content.messageContent",
        };
      }))
    );
  }
}