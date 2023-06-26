'use client'

import {  useMemo } from 'react'
import { useAppSelector } from 'store/hooks'
import { selectFilmsInCart } from 'store/selector/Selectors'
import { useGetAllFilmsQuery } from 'store/reducer/FilmsApiSlice'
import { FilmsList, CartTotal } from 'components'
import styles from './Cart.module.sass'

const emptyArray: Movie[] = [];

const CartContent = () => {
  const filmsInCart = useAppSelector(selectFilmsInCart);
  const filmsInCartIds = useMemo(() => filmsInCart.map((el) => el.id), [filmsInCart]);

  const { movies } = useGetAllFilmsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      movies: data?.filter((film) => filmsInCartIds.includes(film.id)) ?? emptyArray,
    }),
  })

  return (
    <div className={styles.cart__wrapper}>
      <FilmsList allFilms={movies} isRemovable />
      <CartTotal />
    </div>
  )
}

export default CartContent;
