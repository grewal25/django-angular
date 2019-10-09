import { ApiService } from './../../api.service';


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie;
  rateHovered=0;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  rateHover(rate){
    this.rateHovered=rate
  }
  rateClicked(rate){
    this.apiService(rate, this.movie.id).subscribe(
      result =>{
        console.log(result);
      },
      error =>console.log(error)
    )
  }

}
