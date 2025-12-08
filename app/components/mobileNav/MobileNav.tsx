import Link from 'next/link';
import styles from './MobileNav.module.css';

export const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      <div className="container">
        <nav className={styles.mobileNavigation}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link href={'#'}>Проекты</Link>
            </li>
            <li>
              <Link href={'#'}>Компания</Link>
            </li>
            <li>
              <Link href={'#'}>Направления</Link>
            </li>
            <li>
              <Link href={'#'}>Контакты</Link>
            </li>
            <li>
              <Link href={'#'}>Блог</Link>
            </li>
            <li>
              <Link href={'#'}>Карьера</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
