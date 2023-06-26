import { useAppSelector } from 'store/hooks'
import styles from './Cart.module.sass'
import { selectTotalCartAmount } from 'store/selector/Selectors'
import { CART_RANGE } from 'shared/app-congif'

const Cart = () => {
  const totalAmount = useAppSelector(selectTotalCartAmount)

  return (
    <div className={styles.cart}>
      {totalAmount > CART_RANGE.min && <div className={styles.cart__amount}>{totalAmount}</div>}
      <div className={styles.cart__icon} />
    </div>
  )
}

export default Cart
