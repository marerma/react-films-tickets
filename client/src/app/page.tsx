'use client'
import { useMemo } from 'react'
import { useGetAllFilmsQuery } from 'store/reducer/FilmsApiSlice'
import { useAppSelector } from 'store/hooks'
import { IsActiveFilter, ActiveFilters } from 'store/selector/Selectors'
import { filterFilms } from 'shared/utils/getFilteredData'
import { Films, Loader, Filters } from 'components'
import styles from './page.module.sass'

export default function Home() {
  const { data: allFilms, isLoading, isError } = useGetAllFilmsQuery()
  const isActiveFilter = useAppSelector(IsActiveFilter)
  const filters = useAppSelector(ActiveFilters)

  const filteredFilms = useMemo(() => {
    if (allFilms && isActiveFilter) {
      return filterFilms(allFilms, filters)
    }
    return allFilms
  }, [allFilms, filters, isActiveFilter])

  return (
    <div className={styles.home__wrapper}>
      <Filters />
      <div className={styles.home__films}>
        {isError && <p>Something bad happened...</p>}
        {isLoading && <Loader />}
        {filteredFilms && (
          <Films allFilms={filteredFilms} isRemovable={false} />
        )}
        {filteredFilms && filteredFilms.length === 0 && (
          <p>Фильмы по заданным фильтрам не найдены</p>
        )}
      </div>
    </div>
  )
}
