import Image from 'next/image';
import styles from './HeroSocials.module.css';

export const HeroSocials = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.socialItem}>
        <a className={styles.link} href="#">
          <span className={styles.number}>25</span>
          <div className={styles.image}>
            <Image src={'/social-icon-1.svg'} width={28} height={28} alt={''} />
          </div>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={styles.link} href="#">
          <span className={styles.number}>1</span>
          <div className={styles.image}>
            <Image src={'/social-icon-2.svg'} width={40} height={12} alt={''} />
          </div>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={styles.link} href="#">
          <span className={styles.number}>26</span>
          <div className={styles.image}>
            <Image src={'/social-icon-3.svg'} width={25} height={25} alt={''} />
          </div>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={styles.link} href="#">
          <span className={styles.number}>22</span>
          <div className={styles.image}>
            <Image src={'/social-icon-4.svg'} width={23} height={29} alt={''} />
          </div>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={styles.link} href="#">
          <span className={styles.number}>40</span>
          <div className={styles.image}>
            <Image src={'/social-icon-5.svg'} width={33} height={34} alt={''} />
          </div>
        </a>
      </li>
    </ul>
  )
}
