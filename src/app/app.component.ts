import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tweet = {
    body: "something here...",
    likesCount: 10,
    isLiked: true
  }
  title = 'Angular';
}
