import Link from 'next/link';
import { ROUTES } from '../../data/Routes';
import styles from './Footer.module.sass';

export const Footer = () => {
  return (
  <footer className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <Link href={ROUTES.faq}>Вопросы-ответы</Link>
      <Link href={ROUTES.about}>О нас</Link>
    </div>
  </footer>
  )
}