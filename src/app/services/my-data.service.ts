import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { apiResponseI } from '../models/apiResponse.interface';
import { MovieI } from '../models/movie.interface';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  url:string = 'https://api.themoviedb.org/3/';
  apiKey:string = '?api_key=554b1523bc221c8844d88617298a94b7';
  lenguage: string = '&language=es-ES';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(
      this.url );
  }

  getPopularMovies(page: number):Observable<apiResponseI>{
    return this.http.get<apiResponseI>(
      this.url + 'movie/popular'+ this.apiKey + this.lenguage + '&page=' + page
    )
  }

  getLatestMovie(){
    return this.http.get(
      this.url + 'movie/latest' + this.apiKey + this.lenguage
    )
  }

  getMovieById(movieId: string):Observable<MovieI>{
    return this.http.get<MovieI>(
      this.url + 'movie/' + movieId + this.apiKey + this.lenguage
    )
  }

  getImageFromMovieId(movieId: string){
    return this.http.get(
      this.url + 'movie/' + movieId + '/images' + this.lenguage
    )
  }

  searchMovie(movieTitle: string):Observable<apiResponseI>{
    return this.http.get<apiResponseI>(
      this.url + 'search/movie' + this.apiKey + '&query=' + movieTitle
    )
  }
}
