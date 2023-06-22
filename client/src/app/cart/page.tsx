'use client'

import { useAppSelector } from 'store/hooks'
import { FilmsInCartSelector, TotalAmount } from 'store/selector/Selectors'
import { useMemo } from 'react'
import { useGetAllFilmsQuery } from 'store/reducer/FilmsApiSlice'
import { Films } from 'components'
import styles from './Cart.module.sass'

export default function Cart() {
  const filmsInCart = useAppSelector(FilmsInCartSelector)
  const totalAmount = useAppSelector(TotalAmount)
  const { data } = useGetAllFilmsQuery()
  const selectedFilms = useMemo(() => {
    if (filmsInCart && data) {
      const ids = filmsInCart.map((el) => el.id)
      return data.filter((film) => ids.includes(film.id))
    }
  }, [data, filmsInCart])

  return (
    <div className={styles.cart__wrapper}>
      {selectedFilms && <Films allFilms={selectedFilms} isRemovable />}
      <div className={styles.cart__total}>
        {' '}
        {totalAmount === 0
          ? 'В корзине нет билетов'
          : `Всего билетов: ${totalAmount}`}
      </div>
    </div>
  )
}
