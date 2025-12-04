import styles from './Presentation.module.css';

export const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.links}>
        <a href="#">pdf</a>
        <a href="#">pitch</a>
      </div>
      <p>Презентация компании</p>
    </div>
  )
}
