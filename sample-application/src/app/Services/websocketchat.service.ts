import { Injectable } from '@angular/core';
import * as Rj from 'rxjs';

@Injectable()
export class WebsocketChatService {
  constructor() {

  }

  private subject: Rj.Subject<MessageEvent> | undefined;

  public connect(url :string): Rj.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected To: ' + url);
    }
    return this.subject;
  }

  private create(url : string): Rj.Subject<MessageEvent> {
    let wsc = new WebSocket(url);

    let observable = Rj.Observable.create((obs: Rj.Observer<MessageEvent>) => {
      wsc.onmessage = obs.next.bind(obs);
      wsc.onerror = obs.error.bind(obs);
      wsc.onclose = obs.complete.bind(obs);
      return wsc.close.bind(wsc);
    });
    let observer = {
      next: (data: Object) => {
        if (wsc.readyState === WebSocket.OPEN) {
          console.log(data, "")
          wsc.send(JSON.stringify(data));
        }
      },
    };
    return Rj.Subject.create(observer, observable);
  }
}