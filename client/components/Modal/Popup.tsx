import React from 'react'
import styles from './Modal.module.sass'
import { useAppDispatch } from 'store/hooks'
import { removeFromCart } from 'store/reducer/CartSlice'

type PopupProps = {
  handleClose: () => void
  id: string
}
const Popup = ({ handleClose, id }: PopupProps) => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(removeFromCart({ id }))
  }
  return (
    <div className={styles.popup__wrapper}>
      <h4 className={styles.popup__title}>Удаление билета</h4>
      <p className={styles.popup__text}>
        Вы уверены, что хотите удалить билет?
      </p>
      <div className={styles.popup__btnWrapper}>
        <button className={styles.popup__btn} onClick={handleDelete}>
          Да
        </button>
        <button className={styles.popup__btn_transparent} onClick={handleClose}>
          Нет
        </button>
      </div>
    </div>
  )
}

export default Popup
