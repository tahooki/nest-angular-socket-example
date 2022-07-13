import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  constructor(private _chatService:ChatService) {
  }
  ngOnInit(): void {
    this._chatService.sendMessage('호잇');
    this._chatService.getMessage().subscribe(chat => {
      console.log('chat subscribe', chat);
    })
  }
}
