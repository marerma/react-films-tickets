'use client'
import debounce from 'lodash.debounce'
import { useState, useMemo, useEffect } from 'react'
import { useAppDispatch } from 'store/hooks'
import { addFilter, resetFilters } from 'store/reducer/FiltersSlice'
import styles from './Filters.module.sass'

type SearchProps = {
  filterType: 'genre' | 'title' | 'cinema'
}
const Search = ({ filterType }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useAppDispatch()

  const handleSearchDebounced = useMemo(
    () =>
      debounce(
        (event: React.ChangeEvent<HTMLInputElement>, searchValue: string) => {
          dispatch(addFilter({ type: filterType, value: searchValue }))
        }
      ),
    [dispatch, filterType]
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    handleSearchDebounced(e, value)
  }

  useEffect(() => {
    return () => {
      dispatch(resetFilters())
    }
  }, [dispatch])

  return (
    <div className={styles.input}>
      <label htmlFor="titleSearch" className={styles.input__searchLabel}>
        Название
      </label>
      <input
        id="titleSearch"
        type="text"
        value={searchValue}
        placeholder="Введите название"
        className={styles.input__searchInput}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
