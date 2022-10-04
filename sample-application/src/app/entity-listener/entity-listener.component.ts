import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chatservice.service';

@Component({
  selector: 'app-entity-listener',
  templateUrl: './entity-listener.component.html',
  styleUrls: ['./entity-listener.component.less']
})
export class EntityListenerComponent implements OnInit {

  constructor(private chatService: ChatService) {

    chatService.messages.subscribe((msg) => {

      console.log('Response recieved from websocket: ' ,msg);
    });

   }

  ngOnInit(): void {
  }

  private message = {
    action  : 'sub',
    channel : 'killstream',
  };


  sendMessage() {
    console.log('new message from the client: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.channel= "region:10000002";
  }


}
