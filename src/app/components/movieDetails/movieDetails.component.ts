import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieI } from 'src/app/models/movie.interface';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-movieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.css']
})
export class MovieDetailsComponent {
  myMovie!: MovieI
  @Input() movie: MovieI | undefined;

  constructor(private myDataService: MyDataService, private router: Router, private activeRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    let movieId = this.activeRouter.snapshot.paramMap.get('id')
    if (movieId != null) {
      this.myDataService.getMovieById(movieId).subscribe((data) => {
        this.myMovie = data
        console.log(this.myMovie)
      })
    };
  }
}
