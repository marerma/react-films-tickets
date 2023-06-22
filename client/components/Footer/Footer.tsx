import Link from 'next/link'
import { ROUTES } from 'shared/constants'
import styles from './Footer.module.sass'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Link href={ROUTES.faq}>Вопросы-ответы</Link>
        <Link href={ROUTES.about}>О нас</Link>
      </div>
    </footer>
  )
}

export default Footer
