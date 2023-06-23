import { translateGenre } from 'shared/utils/Localization'
import { FILTER_TYPES } from 'components/Filters/mock/Filters'
import { FilterState } from 'store/reducer/FiltersSlice'

export const getGenresList = (movies: Movie[]) => {
  const keys = new Set(movies.map((film) => film.genre))
  const genres = [...keys].map((g) => ({ name: translateGenre(g), id: g }))
  return genres
}

export const getCinemaList = (cinemas: Cinema[]) => {
  return cinemas.map((cinema) => ({ name: cinema.name, id: cinema.id }))
}

export const filterFilms = (movies: Movie[], filters: FilterState): Movie[] => {
  const filteredFilms = movies.filter((film) =>
    Object.entries(filters).every(([type, value]) => {
      const isAvailable = () =>
        type in film && (type === FILTER_TYPES.genre || FILTER_TYPES.title)
      const filmValue = film[type as keyof Movie] as string
      return isAvailable()
        ? filmValue.toLowerCase().includes(value.toLowerCase()) ||
            filmValue.toLowerCase() === value.toLowerCase()
        : true
    })
  )

  return filteredFilms
}
