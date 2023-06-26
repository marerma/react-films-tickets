import { CART_RANGE } from "shared/app-congif";
import { useAppSelector } from "store/hooks";
import { selectTotalCartAmount } from "store/selector/Selectors";
import styles from './Cart.module.sass'

const CartTotal = () => {
  const totalAmount = useAppSelector(selectTotalCartAmount);

  return (
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
  </div>)
}
export default CartTotal;