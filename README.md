# The Lord Of The Rings SDK

This project contains the SDK for the [The One API](https://the-one-api.dev/) API. It is written in TypeScript and uses [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) for the http requests. This library allow you to make HTTP requests in a way that is consistent across both client and server-side Javascript

## Installation

Install the package via npm(or your favorite package manager)

```sh

npm i movielib

```

## Usage

You need to register [here](https://the-one-api.dev/) for an api key in order to use the sdk


This SDK is better used with TypeScript, but it can be used with JavaScript as well.

```ts
typescript

import { MovieLib } from 'movielib'

const authToken = process.env.AUTH_TOKEN
const client = new MovieLib(authToken)

const movies = await client.getMovies()
// or
const movie = await client.getMovie(id)


```