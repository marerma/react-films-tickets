'use client'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import styles from './TicketsCounter.module.sass'
import { FilmsInCartSelector } from 'store/selector/Selectors'
import { useEffect, useMemo } from 'react'
import {
  addToCart,
  decrementCart,
  removeFromCart,
} from 'store/reducer/CartSlice'

const COLOR = {
  active: '#FF5500',
  inactive: '#FFA375',
}
type TicketsCounterProps = {
  id: string
}
const TicketsCounter = ({ id }: TicketsCounterProps) => {
  const filmsInCart = useAppSelector(FilmsInCartSelector)
  const dispatch = useAppDispatch()

  const totalAmount = useMemo(() => {
    const film = filmsInCart.find((el) => el.id === id)
    return film ? film.amount : 0
  }, [filmsInCart, id])

  const handleAdd = () => {
    dispatch(addToCart({ id }))
  }

  const handleRemove = () => {
    dispatch(decrementCart({ id }))
  }

  return (
    <div className={styles.counter__wrapper}>
      <span onClick={handleRemove} className={styles.counter__button}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="20"
            height="20"
            rx="4"
            fill={totalAmount === 0 ? COLOR.inactive : COLOR.active}
          />
          <path
            d="M14.5 10C14.5 10.0995 14.4605 10.1948 14.3902 10.2652C14.3198 10.3355 14.2245 10.375 14.125 10.375H5.875C5.77554 10.375 5.68016 10.3355 5.60984 10.2652C5.53951 10.1948 5.5 10.0995 5.5 10C5.5 9.90054 5.53951 9.80516 5.60984 9.73484C5.68016 9.66451 5.77554 9.625 5.875 9.625H14.125C14.2245 9.625 14.3198 9.66451 14.3902 9.73484C14.4605 9.80516 14.5 9.90054 14.5 10Z"
            fill="white"
          />
        </svg>
      </span>
      <span style={{ fontSize: 20 }}>{totalAmount}</span>
      <span onClick={handleAdd} className={styles.counter__button}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="20"
            height="20"
            rx="4"
            fill={totalAmount === 30 ? COLOR.inactive : COLOR.active}
          />
          <path
            d="M14.5 10C14.5 10.0995 14.4605 10.1948 14.3902 10.2652C14.3198 10.3355 14.2245 10.375 14.125 10.375H10.375V14.125C10.375 14.2245 10.3355 14.3198 10.2652 14.3902C10.1948 14.4605 10.0995 14.5 10 14.5C9.90054 14.5 9.80516 14.4605 9.73484 14.3902C9.66451 14.3198 9.625 14.2245 9.625 14.125V10.375H5.875C5.77554 10.375 5.68016 10.3355 5.60984 10.2652C5.53951 10.1948 5.5 10.0995 5.5 10C5.5 9.90054 5.53951 9.80516 5.60984 9.73484C5.68016 9.66451 5.77554 9.625 5.875 9.625H9.625V5.875C9.625 5.77554 9.66451 5.68016 9.73484 5.60984C9.80516 5.53951 9.90054 5.5 10 5.5C10.0995 5.5 10.1948 5.53951 10.2652 5.60984C10.3355 5.68016 10.375 5.77554 10.375 5.875V9.625H14.125C14.2245 9.625 14.3198 9.66451 14.3902 9.73484C14.4605 9.80516 14.5 9.90054 14.5 10Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  )
}

export default TicketsCounter
