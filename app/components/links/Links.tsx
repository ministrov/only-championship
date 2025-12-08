import { LinksProps } from './Links.interface';
import styles from './Links.module.css';

export const Links = ({ className }: LinksProps) => {
  return (
    <address className={`${styles.links} ${className}`}>
      <a href="mailto:hello@only.digital">hello@only.digital</a>
      <br />
      <a href="tel:+74957409979">+7 (495) 740 99 79</a>
    </address>
  )
}
