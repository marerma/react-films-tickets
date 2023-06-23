import Link from 'next/link'
import { ROUTES } from 'shared/app-congif'
import { Cart } from 'components'
import styles from './Header.module.sass'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1>
          <Link href={ROUTES.home}>Билетопоиск</Link>
        </h1>
        <Link href={ROUTES.cart}>
          <Cart />
        </Link>
      </div>
    </header>
  )
}

export default Header
