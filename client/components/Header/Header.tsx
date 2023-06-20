import Link from 'next/link';
import { ROUTES } from '../../data/Routes';
import { Cart } from '../Cart/Cart';
import styles from './Header.module.sass';

export const Header = () => {
  return (
  <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <h1><Link href={ROUTES.home}>Билетопоиск</Link></h1>
      <Cart/>
    </div>
  </header>
  )
}