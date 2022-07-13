import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsGateway } from './notification.gateway';
import { SocketModule } from '@nestjs/websockets/socket-module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NotificationsGateway],
})
export class AppModule {}
