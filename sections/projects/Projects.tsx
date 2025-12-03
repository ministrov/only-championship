import Image from 'next/image';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <header className={styles.top}>
        <div className={styles.left}>
          <h2 className={styles.title}>крупные проекты</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.slogan}>Поддерживаем и развиваем долгосрочное сотрудничество</p>

          <div className={styles.controls}>
            <button className={styles.prev}>
              <Image src={'/arrow-left.svg'} width={20} height={20} alt={''} />
            </button>
            <button className={styles.next}>
              <Image src={'/arrow-right.svg'} width={20} height={20} alt={''} />
            </button>
          </div>
        </div>
      </header>

      <div className={styles.carousel}>
        <div className={styles.item}>
          <ul className={styles.miniCards}>
            <li>
              <Image src={'/projects-mini-card-1.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-2.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-3.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-4.png'} width={85} height={85} alt={''} />
            </li>
          </ul>

          <footer className={styles.bottom}>
            <h3>Промышленность</h3>
            <h4>Северсталь</h4>
            <p>Адаптация нового брендинга для digital</p>
          </footer>
        </div>
        <div className={styles.item}>
          <ul className={styles.miniCards}>
            <li>
              <Image src={'/projects-mini-card-5.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-6.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-7.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-8.png'} width={85} height={85} alt={''} />
            </li>
          </ul>

          <footer className={styles.bottom}>
            <h3>Промышленность</h3>
            <h4>Сибур</h4>
            <p>Адаптация нового брендинга для digital</p>
          </footer>
        </div>
        <div className={styles.item}>
          <ul className={styles.miniCards}>
            <li>
              <Image src={'/projects-mini-card-9.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-10.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-11.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-12.png'} width={85} height={85} alt={''} />
            </li>
          </ul>

          <footer className={styles.bottom}>
            <h3>Недвижимость</h3>
            <h4>MR Group</h4>
            <p>Адаптация нового брендинга для digital</p>
          </footer>
        </div>
        <div className={styles.item}>
          <ul className={styles.miniCards}>
            <li>
              <Image src={'/projects-mini-card-13.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-14.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-15.png'} width={85} height={85} alt={''} />
            </li>
          </ul>

          <footer className={styles.bottom}>
            <h3>Недвижимость</h3>
            <h4>Главстрой</h4>
            <p>Адаптация нового брендинга для digital</p>
          </footer>
        </div>
        <div className={styles.item}>
          <ul className={styles.miniCards}>
            <li>
              <Image src={'/projects-mini-card-13.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-14.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-15.png'} width={85} height={85} alt={''} />
            </li>
          </ul>

          <footer className={styles.bottom}>
            <h3>Недвижимость</h3>
            <h4>Главстрой</h4>
            <p>Адаптация нового брендинга для digital</p>
          </footer>
        </div>
        <div className={styles.item}>
          <ul className={styles.miniCards}>
            <li>
              <Image src={'/projects-mini-card-13.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-14.png'} width={85} height={85} alt={''} />
            </li>
            <li>
              <Image src={'/projects-mini-card-15.png'} width={85} height={85} alt={''} />
            </li>
          </ul>

          <footer className={styles.bottom}>
            <h3>Недвижимость</h3>
            <h4>Главстрой</h4>
            <p>Адаптация нового брендинга для digital</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
