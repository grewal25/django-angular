import { ApiService } from './../api.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



const routes: Routes=[
  {path: 'movies', component: MainComponent},
];


@NgModule({
  declarations: [
    MainComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
    ApiService
  ]
})
export class MainModule { }
