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

      <header className={styles.top}>
        <p className={styles.slogan}>Creative digital production</p>

        <div className={styles.image}>
          <Image src={'/hero-video-img.png'} width={608} height={304} alt={'A placeholder for future video'} />
        </div>

        <HeroSocials />
      </header>

      <footer className={styles.bottom}>
        <div className={styles.bottomRight}>
          <p>
            <span>10</span> <span>лет</span> <span>Лучший креативный разработчик для b2b</span>
          </p>

          <Links />

          <TgContact />
        </div>

        <div className={styles.bottomLeft}>
          <p>
            Only.digital — агентство с фокусом на сильную аналитику, дизайн и разработку. В основе наших проектов лежат идеи, создаваемые на стыке стратегии, креатива и технологий.
          </p>

          <Presentation />

          <Button className={styles.heroBtn}>Начать проект</Button>
        </div>
      </footer>
    </section>
  )
}
