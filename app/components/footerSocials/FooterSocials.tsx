import Link from 'next/link';
import styles from './FooterSocials.module.css';

export const FooterSocials = () => {
  return (
    <ul className={styles.footerSocials}>
      <li>
        <Link href={'#'}>be</Link>
      </li>
      <li>
        <Link href={'#'}>dp</Link>
      </li>
      <li>
        <Link href={'#'}>tg</Link>
      </li>
      <li>
        <Link href={'#'}>vk</Link>
      </li>
    </ul>
  )
}
