import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl='http://127.0.0.1:8000/api/movies/'
  headers=new HttpHeaders({
    'Content-Type':'application/json',
    Authorization: 'Token 65ebfa6555a7e3d5a8f9987c91e887d8eb0ee6f8'
  });

  constructor(private httpClient: HttpClient) {

   }
  getMovies(){
     return  this.httpClient.get(this.baseUrl, {headers: this.headers});
   
  }

  rateMovies(rate: number, movieId: number){
    const body= JSON.stringify({stars: rate});
    return  this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`,body, {headers: this.headers});
  
 }

}
