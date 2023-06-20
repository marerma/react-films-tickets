import styles from './Filters.module.sass';

export const Search = () => {
  return (
    <div className={styles.input}>
      <label htmlFor='titleSearch' className={styles.input__searchLabel}>Название</label>
      <input 
        id='titleSearch'
        type='text'
        placeholder='Введите название'
        className={styles.input__searchInput} />
    </div>
  )
}