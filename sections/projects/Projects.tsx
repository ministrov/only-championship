import Image from 'next/image';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>крупные проекты</h2>
      <p>Поддерживаем и развиваем долгосрочное сотрудничество</p>

      <button className={styles.left}>
        <Image src={'/arrow-left.svg'} width={20} height={20} alt={''} />
      </button>
      <button className={styles.right}>
        <Image src={'/arrow-right.svg'} width={20} height={20} alt={''} />
      </button>

      <div className={styles.carousel}>
        <div className={styles.item}>
          <header className={styles.top}>
            <ul>
              <li>
                <Image src={''} width={122} height={222} alt={''} />
              </li>
              <li>
                <Image src={''} width={122} height={222} alt={''} />
              </li>
              <li>
                <Image src={''} width={122} height={222} alt={''} />
              </li>
              <li>
                <Image src={''} width={122} height={222} alt={''} />
              </li>
            </ul>
          </header>
        </div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </section>
  )
}
