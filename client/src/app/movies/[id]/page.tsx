import { Metadata } from 'next'
import { FilmCard, ReviewsList } from 'components'
import { BASE_URL } from 'shared/app-congif'

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Movies to watch in cinemas',
}

type Props = {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: Props): Promise<Pick<Movie, 'title' | 'description'>> {
  const id = params.id
  const film = (await fetch(`${BASE_URL}/movie?movieId=${id}`).then((res) =>
    res.json()
  )) as Movie

  return {
    title: film.title,
    description: film.description,
  }
}

export default function Movie({ params }: { params: { id: string } }) {
  return (
    <>
      <FilmCard id={params.id} />
      <ReviewsList id={params.id} />
    </>
  )
}
