import { Films } from 'components/Films/Films'
import { Filters } from 'components/Filters/Filters'
import styles from './page.module.sass'

export default function Home() {
  return (
  <div className={styles.home__wrapper}>
    <Filters />
    <Films />
  </div>
  )
}
