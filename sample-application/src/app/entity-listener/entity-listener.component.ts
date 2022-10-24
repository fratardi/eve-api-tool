import { Component, OnInit } from '@angular/core';
import { ChatService } from '../Services/chatservice.service';
import { EveEsiService } from '../Services/eve-esi.service';

@Component({
  selector: 'app-entity-listener',
  templateUrl: './entity-listener.component.html',
  styleUrls: ['./entity-listener.component.less']
})
export class EntityListenerComponent implements OnInit {

  killList : any[] = [] ;

	constructor(
		private chatService : ChatService,
		private esi         : EveEsiService
	) {
		chatService.messages.subscribe((msg : any) => {
//	  	console.log('Response recieved from websocket: ' ,JSON.parse(msg.truc));
		this.killList.push(JSON.parse(msg.truc))
//	  	console.log(this.killList)
	});
   }

  ngOnInit(): void {
  }

  clearStream(){
	this.killList = [];
  }

  private message = {
	action  : 'sub',
	channel : 'killstream',
  };


  fetchEntityType	(){}
  fetchEntityExactMatch(){}
  fetchEntityName(){}
  

  sendMessage() {
//	console.log('new message from the client: ', this.message , this );
	this.chatService.messages.next(this.message);
	this.message.channel= "region:10000002";
  }

  getEntityToListen(param: any){
	console.log("this = ", this, param)


  }

}