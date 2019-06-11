import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDataService } from './author-data.service';
import { StarComponent } from './star/star.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { LikesComponent } from './likes/likes.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    StarComponent,
    CustompipeComponent,
    CustomPipe,
    LikesComponent,
    ZippyComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
