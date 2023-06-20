import { BASE_URL } from "./constants"

export async function getReviews():Promise<Review[]> {
  const res = await fetch(`${BASE_URL}/reviews`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const reviews: Review[] = await res.json();
  return reviews;
}

export async function getFilmReviews(id: string):Promise<Review[]> {
  const res = await fetch(`${BASE_URL}/reviews?movieId=${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const reviews: Review[] = await res.json();
  return reviews;
}