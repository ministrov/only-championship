import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href={'/'} className={styles.logo}>
            <Image src={'/logo.svg'} width={82} height={27} alt={'Design studio logo'} />
            <span className="visually-hidden">На главную</span>
          </Link>

          <nav className={styles.navigation}>
            <ul className={styles.mainNav}>
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

            <div className={styles.favorite}>
              <span>40</span>
              <button type='button' className={styles.favoriteBtn}>
                <Image src={'/star.svg'} width={24} height={24} alt={'A favorite button as a star icon'} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
