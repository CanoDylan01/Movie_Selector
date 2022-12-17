import { MovieI } from "./movie.interface";

export interface apiResponseI {
  page: number;
  results: Array<MovieI>;
  total_pages: number;
  total_results: number;
}