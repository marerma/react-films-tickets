import styles from './Filters.module.sass';
import { Search } from './SearchFilm';
import { Select } from './Select';

const DropDowns = [
  {
    label: "Жанр", 
    options: [],
    placeholder: "Выберите жанр",

  },  
  {
    label: 'Кинотеатр',
    options: [],
    placeholder: "Выберите кинотеатр",
  },  
]
export const Filters = () => {
  return (
      <section className={styles.filters__wrapper}>
        <h3 className={styles.filters__title}>Фильтр поиска</h3>
        <Search />
        {DropDowns.map((menu) => <Select key={menu.label} label={menu.label} options={menu.options} placeholder={menu.placeholder}/>)}
      </section>
  )
}