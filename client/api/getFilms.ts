import { BASE_URL } from "./constants"

export async function getAllFilms():Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movies`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const movies: Movie[] = await res.json();
  return movies;
}
 
export async function getCinemaFilms(id: string):Promise<Cinema[]> {
  const res = await fetch(`${BASE_URL}/movies?cinemaId=${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const movies: Cinema[] = await res.json();
  return movies;
}