import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {
  getAuthors(){
    return ["Author 1", "Author 2", "Author 3"]
  }
}
