import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MessagesComponent, RouterModule]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
