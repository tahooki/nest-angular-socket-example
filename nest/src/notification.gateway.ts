import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Socket } from 'net';

@WebSocketGateway({
  // namespace: 'events',
  path: '/event',
  cors: {
    credentials: false,
  },
})
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server;
  users = 0;

  async handleConnection(client) {
    console.log('connect');
    // A client has connected
    // this.users++;
    //
    // // Notify connected clients of current users
    // this.server.emit('users', this.users);
    // console.log('user connect ', this.users);
  }

  async handleDisconnect() {
    console.log('disconnect');

    // A client has disconnected
    // this.users--;
    //
    // // Notify connected clients of current users
    // this.server.emit('users', this.users);
    // console.log('user disconnect ', this.users);
  }

  @SubscribeMessage('chat')
  async onChat(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    this.server.emit('chat', data);
    console.log('events', data);
  }
}
