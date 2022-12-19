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
  
  enteredSearchValue : string = 'h'
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  public movieList: Array<MovieI> = []

  constructor(private myDataService: MyDataService) { 
    this.searchForm
    .get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((movieTitle) => this.myDataService.searchMovie(movieTitle)),
    )
    .subscribe((movieTitle) => {
      this.movieList = movieTitle?.results
    })
  }

  ngOnInit(): void {
    if (this.enteredSearchValue != null)
    this.myDataService.searchMovie(this.enteredSearchValue).subscribe(data => {
      console.log(data.results)
    })  
  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}

