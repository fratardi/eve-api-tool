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
  providers: [WebsocketChatService, ChatService],

})
export class AppComponent {
  title = 'sample-application';
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe((msg) => {
      

//      console.log("-------------------------------------", JSON.parse(truc as any),"------------------------------");


    
    //  console.log("--------------------8-----------------", JSON.parse(msg as any),"-----------------8-------------");

      console.log('Response recieved from websocket: ' ,msg);



    });
  }



  private message = {
    action: 'sub',
   channel: 'killstream',
  };

  sendMessage() {
    console.log('new message from the client: ', this.message);
    this.chatService.messages.next(this.message);

    this.message.channel= "region:10000002";
  }


}
