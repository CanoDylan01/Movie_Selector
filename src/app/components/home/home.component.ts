import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { apiResponseI } from 'src/app/models/apiResponse.interface';
import { MovieI } from 'src/app/models/movie.interface';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  myData: MovieI[] | undefined;
  urlImg : string = "https://image.tmdb.org/t/p/w250"
  
  constructor(private myDataService: MyDataService, private router: Router) {

  }
  ngOnInit(): void { 
    this.myDataService.getPopularMovies(1).subscribe((data) => {
      this.myData = data.results;
      console.log(this.myData)
    });
  }

  movieDetails(id: number){
    console.log(id);
    this.router.navigate(['movie', id]);
  }
}