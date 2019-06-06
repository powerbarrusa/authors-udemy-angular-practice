import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  clicked = false

  onClick(){
    this.clicked = !this.clicked
  }

  constructor() { }

  ngOnInit() {
  }

}
