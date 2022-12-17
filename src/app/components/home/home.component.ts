import { Component, OnInit } from '@angular/core';
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
  
  constructor(private myDataService: MyDataService) {

  }
  ngOnInit(): void { this.myDataService.getPopularMovies(1)
    .subscribe((data) => {
      this.myData = data.results;
      console.log(this.myData)
    });
  }
  /*ngOnInit(): void {
    this.myDataService.getPopularMovies(1)
    .pipe(
      //map(response => {const json = response.json()}),
      tap(data => console.log('Data:', data))
    );
  }*/
}