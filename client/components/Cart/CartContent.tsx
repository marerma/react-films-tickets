'use client'

import { useAppSelector } from 'store/hooks'
import { FilmsInCartSelector, TotalAmount } from 'store/selector/Selectors'
import { useMemo } from 'react'
import { useGetAllFilmsQuery } from 'store/reducer/FilmsApiSlice'
import { Films } from 'components'
import styles from './Cart.module.sass'
import { CART_RANGE } from 'shared/app-congif'

const CartContent = () => {
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
      {selectedFilms && <Films.List allFilms={selectedFilms} isRemovable />}
      <div
        className={
          totalAmount === CART_RANGE.min
            ? styles.cart__total_empty
            : styles.cart__total
        }
      >
        {' '}
        {totalAmount === CART_RANGE.min ? (
          <span className={styles.cart__text}>В корзине нет билетов</span>
        ) : (
          <div className={styles.cart__textWrapper}>
            <span className={styles.cart__text}>Итого билетов:</span>
            <span className={styles.cart__text}>{totalAmount}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartContent
