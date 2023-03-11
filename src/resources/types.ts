export interface IMovie {
    name: string,
    runtimeInMinutes: Number,
    budgetInMillions: Number,
    boxOfficeRevenueInMillions: Number,
    academyAwardNominations: Number,
    academyAwardWins: Number,
    rottenTomatoesScore: Number
}

interface IUser {
    email: string,
    password: string,
    accessToken: string,
}

export interface IQuote {
    dialog: string,
    movie: IMovie,
    character?: IUser
}