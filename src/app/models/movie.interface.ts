export interface MovieI{
  adult: boolean;
  id: number;
  original_language: string;
  title: string;
  poster_path: string;
  runtime: number
  overview: string;
  popularity: number;
  release_date: Date;
  vote_average: number;
  vote_count: number;
  page: number;
}