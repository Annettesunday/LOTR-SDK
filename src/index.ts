import { Movie } from "./resources"

export class MovieLib {
    movie: Movie;

    constructor(config: { authToken: string }) {
        this.movie = new Movie(config)
    }
}