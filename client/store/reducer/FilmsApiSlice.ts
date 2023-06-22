import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "shared/constants";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllFilms: builder.query<Movie[], void>({
      query: () => ({ url: "/movies" }),
    }),
    getOneFilm: builder.query<Movie, string>({
      query: (id) => `/movie?movieId=${id}`,
    }),
    getCinemaFilms: builder.query<Movie[], string>({
      query: (id) => `/movies?cinemaId=${id}`,
    }),
    getAllCinemas: builder.query<Cinema[], void>({
      query: () => "/cinemas",
    }),
    getReviews: builder.query<Review[], void>({
      query: () => "/reviews",
    }),
    getFilmReviews: builder.query<Review[], string>({
      query: (id) => `/reviews?movieId=${id}`,
    }),
  }),
});

export const {
  useGetAllFilmsQuery,
  useGetOneFilmQuery,
  useGetAllCinemasQuery,
  useGetFilmReviewsQuery,
  useGetReviewsQuery,
  useLazyGetCinemaFilmsQuery
} = filmsApi;
