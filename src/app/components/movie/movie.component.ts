import { Component, Input } from '@angular/core';
import { MovieI } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie : MovieI | undefined;
}
