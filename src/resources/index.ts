import { MovieBase } from "./base";
import { IMovie, IQuote } from "./types";

export class Movie extends MovieBase {
    getMovies(): Promise<IMovie[]> {
        return this.request("/movie");
    }

    getMovie(id: number): Promise<IMovie> {
        return this.request(`/movie${id}`)
    }

    getMovieQuote(id: number): Promise<IQuote[]> {
        return this.request(`/movie/${id}/quote`)
    }
}
