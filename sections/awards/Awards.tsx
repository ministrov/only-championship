import Image from 'next/image';
import styles from './Awards.module.css';

export const Awards = () => {
  return (
    <section className={styles.awards}>
      <header className={styles.top}>
        <div className={styles.left}>
          <h2 className={styles.title}>награды</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.sloganOne}>За 10 лет активной работы мы завоевали более 150 призовых мест </p>
          <p className={styles.sloganTwo}>Каждый год подтверждаем высокие позиции в Рейтинге Рунета в сегменте крупного B2B-бизнеса. Побеждаем на международных и российских конкурсах в номинациях digital-дизайна и разработки сайтов.</p>
        </div>
      </header>

      <div className={styles.main}>
        <div className={styles.achivements}>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <Image src={'/awards-title-img-1.svg'} width={90} height={90} alt={''} />
              <span>AWWWARDS</span>
            </p>
            <span>25</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <Image src={'/awards-title-img-2.svg'} width={90} height={90} alt={''} />
              <span>СSSDA</span>
            </p>
            <span>28</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <Image src={'/awards-title-img-3.svg'} width={90} height={90} alt={''} />
              <span>Mixxrussia</span>
            </p>
            <span>5</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <span>G8</span>
              <Image src={'/awards-title-img-4.svg'} width={90} height={90} alt={''} />
              &nbsp;
              <span>Awards</span>
            </p>
            <span>6</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <Image src={'/awards-title-img-5.svg'} width={90} height={90} alt={''} />
              <span>Среда</span>
            </p>
            <span>5</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <span>Рейтинг</span>
              <Image src={'/awards-title-img-6.svg'} width={90} height={90} alt={''} />
              &nbsp;
              <span>Рунета</span>
            </p>
            <span>22</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <span>Золотой</span>
              <Image src={'/awards-title-img-7.svg'} width={90} height={90} alt={''} />
              &nbsp;
              <span>Сайт</span>
            </p>
            <span>40</span>
          </a>
          <a className={styles.link} href="#">
            <p className={styles.text}>
              <span>WOW</span>
              <Image src={'/awards-title-img-8.svg'} width={90} height={90} alt={''} />
              &nbsp;
              <span>Awards</span>
            </p>
            <span className={styles.number}>2</span>
          </a>
        </div>
        <div className={styles.awardsContainer}>
          <ul className={styles.awardsCardList}>
            <li className={styles.cardItem}>
              <header>
                <dl>
                  <dt>2</dt>
                  <dd>Рейтинг Рунета 2024</dd>
                </dl>
              </header>

              <p>в рейтинге креативности для крупного B2B-бизнеса</p>
            </li>
            <li className={styles.cardItem}>
              <header>
                <dl>
                  <dt>2</dt>
                  <dd>Рейтинг Рунета 2024</dd>
                </dl>
              </header>

              <p>в дизайне цифровых продуктов для промышленности</p>
            </li>
            <li className={styles.cardItem}>
              <header>
                <dl>
                  <dt>5</dt>
                  <dd>Рейтинг Рунета 2024</dd>
                </dl>
              </header>

              <p>в разработке сайтов для промышленности</p>
            </li>
            <li className={styles.cardItem}>
              <header>
                <dl>
                  <dt>13</dt>
                  <dd>Tagline 2024</dd>
                </dl>
              </header>

              <p>в рейтинге<br /> веб-дизайна</p>
            </li>
            <li className={styles.cardItem}>
              <header>
                <dl>
                  <dt>8</dt>
                  <dd>Ruward 2022</dd>
                </dl>
              </header>

              <p>в рейтинге Digital Design & Creative</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
