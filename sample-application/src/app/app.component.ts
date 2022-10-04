import { Component } from '@angular/core';
import { WebsocketChatService } from './Services/websocketchat.service';
import { ChatService } from './Services/chatservice.service';

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
    ) {  }

}