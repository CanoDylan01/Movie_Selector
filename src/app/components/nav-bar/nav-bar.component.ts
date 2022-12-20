import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MovieI } from 'src/app/models/movie.interface';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output()
  movieEvent: EventEmitter<MovieI[]> = new EventEmitter<MovieI[]>();

  public movieList: MovieI[] = []

  constructor(private myDataService: MyDataService) { this.searchTitle() }

  ngOnInit(): void {

  }

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  searchTitle() {
    this.searchForm
      .get('search')?.valueChanges.pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((movieTitle) => this.myDataService.searchMovie(movieTitle)),
      )
      .subscribe((response) => {
        this.movieList = response?.results
      })
      this.sendMovies();
  }

  sendMovies() {
    this.movieEvent.emit(this.movieList)
  }

}

