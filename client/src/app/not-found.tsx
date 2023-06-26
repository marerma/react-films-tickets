import Link from "next/link";
import styles from './page.module.sass'

export default function NotFound() {
  return (
    <>
      <div className={styles.error__wrapper}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <div>
          <Link href='/' className={styles.error__link}>Return to the Homepage</Link>
        </div>
      </div>
    </>
  );
}