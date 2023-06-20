import { BASE_URL } from "./constants"

export async function getOneFilm (id: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie?movieId=${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const movie = await res.json();
  return movie
};
