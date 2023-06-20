import styles from './Filters.module.sass';

type SelectProps = {
  label: string;
  placeholder: string;
  options: string[];
}
export const Select = ({label, options, placeholder}: SelectProps) => {
  return (
    <div className={styles.select}>
      <p className={styles.select__searchLabel}>{label}</p>
      <div className={styles.select__placeholder}>{placeholder} <span className={styles.select__icon}/></div>
      <ul>
        {options.map((opt) => (<li key={opt} value={opt}>{opt}</li>))}
      </ul>
    </div>
  )
}