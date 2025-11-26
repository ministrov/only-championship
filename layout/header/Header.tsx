import Image from 'next/image';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Image src={'/logo.svg'} width={82} height={27} alt={'Design studio logo'} />

        <nav className={styles.navigation}>
          <ul className={styles.mainNav}>
            <li>Проекты</li>
            <li>Компания</li>
            <li>Направления</li>
            <li>Контакты</li>
            <li>Блог</li>
            <li>Карьера</li>
          </ul>

          <div className={styles.favorite}>
            <span>40</span>
            <button type='button'>
              <Image src={'/star.svg'} width={10} height={10} alt={'A favorite button as a star icon'} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
