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

  url:string = 'https://api.themoviedb.org/'
  apiKey:string = 'api_key=554b1523bc221c8844d88617298a94b7'

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(
      this.url );
  }

  getPopularMovies(page: number):Observable<apiResponseI>{
    return this.http.get<apiResponseI>(
      this.url + '3/movie/popular?'+ this.apiKey + '&language=es-ES&page='+page
    )
  }

  getLatestMovies(){
    return this.http.get(
      this.url + '3/movie/latest?' + this.apiKey + '&language=es-ES'
    )
  }
}
