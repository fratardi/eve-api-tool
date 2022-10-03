import { Component } from '@angular/core';

import { WebsocketChatService } from './websocketchat.service';
import { ChatService } from './chatservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
,
  providers: [WebsocketChatService, ChatService],

})
export class AppComponent {
  title = 'sample-application';
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe((msg) => {
      console.log('Response recieved from websocket: ' + msg);
    });
  }



  private message = {
    user: 'Husnain',
    messageContent: 'Hellooooooooo',
  };

  sendMessage() {
    console.log('new message from the client: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.messageContent = 'helloooooo';
  }


}
