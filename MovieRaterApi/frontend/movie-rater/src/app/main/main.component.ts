import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: any = []
  selectedMovie= null
;  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe(
      data => {
        this.movies=data
      },
      error => console.log(error)
    );
  }
  selectMovie(movie){
    this.selectedMovie=movie;
    // console.log('selected movie', this.selectedMovie)
  }
}
