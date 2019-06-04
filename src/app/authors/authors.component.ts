import { Component, OnInit } from '@angular/core';
import { AuthorDataService } from '../author-data.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors

  constructor(service: AuthorDataService) { 
    this.authors = service.getAuthors()
   }

  ngOnInit() {
  }

}
