'use client'

import { useState } from 'react'
import styles from './Filters.module.sass'
import { useAppDispatch } from 'store/hooks'
import { addFilter } from 'store/reducer/FiltersSlice'

type SearchProps = {
  filterType: 'genre' | 'title' | 'cinema'
}
export const Search = ({ filterType }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useAppDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    dispatch(addFilter({ type: filterType, value }))
  }
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
