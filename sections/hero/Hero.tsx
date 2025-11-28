import Image from 'next/image';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2 className='visually-hidden'>Section hero</h2>

      <p className={styles.slogan}>Creative digital production</p>

      <Image src={'/hero-video-img.png'} width={608} height={304} alt={'A placeholder for future video'} />
      <ul className={styles.social}>
        <li>
          <span>25</span>
          <Image src={'/social-icon-1.svg'} width={28} height={28} alt={''} />
        </li>
        <li>
          <span>1</span>
          <Image src={'/social-icon-2.svg'} width={40} height={12} alt={''} />
        </li>
        <li>
          <span>26</span>
          <Image src={'/social-icon-3.svg'} width={25} height={25} alt={''} />
        </li>
        <li>
          <span>22</span>
          <Image src={'/social-icon-4.svg'} width={23} height={29} alt={''} />
        </li>
        <li>
          <span>40</span>
          <Image src={'/social-icon-5.svg'} width={33} height={34} alt={''} />
        </li>
      </ul>

      <p>
        <span>10</span> <span>лет</span> <span>Лучший креативный разработчик для b2b</span>
      </p>


    </section>
  )
}
