import styles from './Movie.module.sass'

export default function OneMovieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.film__page}>{children}</div>
}
