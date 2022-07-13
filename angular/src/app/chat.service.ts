import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) {
  }

  sendMessage(msg: string) {
    // this.socket.ioSocket.nsp = "/events"
    this.socket.emit('chat', msg);
  }
  getMessage() {
    return this.socket.fromEvent('chat');
  }
}
