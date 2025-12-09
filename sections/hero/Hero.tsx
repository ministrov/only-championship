import Image from 'next/image';
import { Links } from '@/app/components/links/Links';
import { TgContact } from '@/app/components/tgContact/TgContact';
import { Presentation } from '@/app/components/presentation/Presentation';
import { Button } from '@/app/components/button/Button';
import styles from './Hero.module.css';
import { HeroSocials } from '@/app/components/heroSosials/HeroSocials';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2 className='visually-hidden'>Section hero</h2>
      <div className={styles.border}></div>

      <header className={styles.top}>
        <p className={styles.slogan}>Creative digital production</p>

        <div className={styles.image}>
          <Image src={'/hero-video-img.png'} width={608} height={304} alt={'A placeholder for future video'} />
        </div>

        <HeroSocials />
      </header>

      <footer className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <p className={styles.sloganWrapper}>
            <span className={styles.number}>10 <span className={styles.yearMobile}>лет</span></span>
            <span className={styles.textContainer}>
              <span className={styles.year}>лет</span> <span className={styles.better}>Лучший креативный разработчик для b2b</span>
            </span>
          </p>

          <div className={styles.mobilePresent}>
            <Presentation />
          </div>

          <div className={styles.desktopLinks}>
            <Links className={styles.heroLinks} />

            <TgContact className={styles.heroTgContact} />
          </div>
        </div>

        <div className={styles.bottomRight}>
          <div className={styles.mobileLinks}>
            <Links />

            <TgContact />
          </div>
          <div className={styles.rightText}>
            <p className={styles.digital}>
              Only.digital — агентство с фокусом на сильную аналитику, дизайн и разработку. В основе наших проектов лежат идеи, создаваемые на стыке стратегии, креатива и технологий.
            </p>

            <div className={styles.desktopPres}>
              <Presentation />
            </div>
          </div>

          <Button className={styles.heroBtn}>Начать проект</Button>
        </div>
        {/* <Button className={styles.mobileHeroBtn}>Начать проект</Button> */}
      </footer>
      <div className={styles.mobileHeroBtnBox}>
        <Button className={styles.mobileHeroBtn}>Начать проект</Button>
      </div>
    </section>
  )
}
