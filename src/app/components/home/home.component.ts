import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieI } from 'src/app/models/movie.interface';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  myData: MovieI[] = []
  urlImg: string = "https://image.tmdb.org/t/p/w250"
  searchText: string = ''
  page: number = 1;
  
  constructor(private myDataService: MyDataService, private router: Router) {

  }
  ngOnInit(): void { 
    this.getData(this.page);
  }

  getData(page: number) {
    this.myDataService.getPopularMovies(page).subscribe((data) => {
      if(data.results != null) this.myData = data.results;
      console.log(this.myData)
    });
  }

  movieDetails(id: number){
    console.log(id);
    this.router.navigate(['movie', id]);
  }
  
  receiveMovies($event: any) {
    this.myData = $event
  }
}