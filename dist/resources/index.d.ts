import { MovieBase } from "./base";
import { IMovie, IQuote } from "./types";
export declare class Movie extends MovieBase {
    getMovies(): Promise<IMovie[]>;
    getMovie(id: number): Promise<IMovie>;
    getMovieQuote(id: number): Promise<IQuote[]>;
}
