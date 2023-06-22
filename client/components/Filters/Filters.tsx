'use client'
import {
  useGetAllCinemasQuery,
  useGetAllFilmsQuery,
} from 'store/reducer/FilmsApiSlice'
import styles from './Filters.module.sass'
import { Search } from './SearchFilm'
import { getCinemaList, getGenresList } from 'shared/utils/getFilteredData'
import { useMemo } from 'react'
import { DropDownMenu } from 'components'
import { DROP_GENRES, DROP_CINEMAS } from './mock/Filters'

const Filters = () => {
  const { data: allFilms } = useGetAllFilmsQuery()
  const { data: allCinemas } = useGetAllCinemasQuery()

  const genresList = useMemo(() => {
    if (allFilms)
      return {
        options: getGenresList(allFilms),
      }
  }, [allFilms])

  const cinemasList = useMemo(() => {
    if (allCinemas)
      return {
        options: getCinemaList(allCinemas),
      }
  }, [allCinemas])

  return (
    <section className={styles.filters__wrapper}>
      <h3 className={styles.filters__title}>Фильтр поиска</h3>
      <Search filterType="title" />
      {
        <DropDownMenu>
          <DropDownMenu.Group
            filterType={DROP_GENRES.filterType}
            title={DROP_GENRES.label}
            items={genresList?.options ?? []}
            placeholder={DROP_GENRES.placeholder}
          />
          <DropDownMenu.Group
            filterType={DROP_CINEMAS.filterType}
            title={DROP_CINEMAS.label}
            items={cinemasList?.options ?? []}
            placeholder={DROP_CINEMAS.placeholder}
          />
        </DropDownMenu>
      }
    </section>
  )
}
export default Filters
