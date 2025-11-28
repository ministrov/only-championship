import styles from './Links.module.css';

export const Links = () => {
  return (
    <address className={styles.links}>
      <a href="mailto:hello@only.digital">hello@only.digital</a>
      <br />
      <a href="tel:+74957409979">+7 (495) 740 99 79</a>
    </address>
  )
}
