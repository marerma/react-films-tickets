import { Metadata } from 'next'
import { Films, Filters } from 'components'
import styles from './page.module.sass'

export const metadata: Metadata = {
  title: 'Билетопоиск',
  description: 'tickets purchasing service',
}

export default function Home() {
  return (
    <div className={styles.home__wrapper}>
      <Filters />
      <Films />
    </div>
  )
}
