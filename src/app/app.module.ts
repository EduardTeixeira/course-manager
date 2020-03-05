import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { CourseService } from './courses/course.service';
import { ReplacePipe } from './pipe/replace.pipe';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        },
        {
          path: 'courses', component: CourseListComponent,
        },
        {
          path: 'courses/info/:id', component: CourseInfoComponent,
        },
        {
          path: '**', component: Error404Component,
        }
      ]
    ),
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
