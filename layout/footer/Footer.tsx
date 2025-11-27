import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <header className={styles.top}>
        <div className={styles.left}>
          <div className={styles.rightImage}>
            <Image src={'/footer-logo.svg'} width={188} height={30} alt='A footer logo' />
          </div>

          <button>Начать проект</button>

          <div className={styles.linksMobile}>
            <a href="mailto:hello@only.digital">hello@only.digital</a>
            <br />
            <a href="tel:+74957409979">+7 (495) 740 99 79</a>
          </div>

          <div className={styles.telegramMobile}>
            <Image src={'/tg-icon.svg'} width={16} height={16} alt={'Social icon of telegram'} />
            <a href="#">@onlydigitalagency</a>
          </div>

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

          <p>© 2014 - 2024</p>
        </div>
        <div className={styles.right}>
          <div className={styles.rightText}>
            <p>Создаем качественный digital-продукт на базе стратегии, креатива и технологий</p>

            <div className={styles.links}>
              <a href="mailto:hello@only.digital">hello@only.digital</a>
              <br />
              <a href="tel:+74957409979">+7 (495) 740 99 79</a>
            </div>

            <div className={styles.telegram}>
              <p>Telegram для связи</p>
              <a href="#">@onlydigitalagency</a>
            </div>

            <div className={styles.presentation}>
              <a href="#">pdf</a>
              <a href="#">pitch</a>
              <p>Презентация компании</p>
            </div>
          </div>

          <div className={styles.rightImage}>
            <Image src={'/footer-logo.svg'} width={188} height={30} alt='A footer logo' />
          </div>
        </div>
      </header>
      <footer className={styles.bottom}>
        <div className={styles.slogan}>
          <span className={styles.line}>
            <span>Creative</span>
            <span>digital</span>
            <span>production</span>
          </span>
        </div>
        <a href="#" target="_blank">Политика конфиденциальности</a>
      </footer>
    </footer>
  )
}
