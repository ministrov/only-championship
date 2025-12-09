import Image from 'next/image';
import Link from 'next/link';
import styles from './Portfolio.module.css';
import { Button } from '@/app/components/button/Button';

export const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <header className={styles.top}>
        <h2 className={styles.title}>Проекты</h2>

        <div className={styles.sloganContainer}>
          <p className={styles.sloganOne}>Аналитика, брендинг и разработка для B2B</p>
          <p className={styles.sloganMobile}>Only — digital–агентство с фокусом на сильную аналитику, дизайн и разработку. В основе наших проектов лежат идеи, создаваемые на стыке стратегии, креатива и технологий.</p>
          <p className={styles.sloganTwo}>Обеспечиваем компании лучшими техническими и дизайн-решениями, создавая digital-проекты.</p>
        </div>
      </header>

      <ul className={styles.works}>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-1.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Корпоративный сайт Сибура</h3>
            <p>Адаптация нового брендинга для digital. Разработка, дизайн<br /> основного сайта и подразделений</p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-2.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Корпоративный сайт Северстали</h3>
            <p>Единая digital-платформа, объединяющая группу сайтов и суббрендов компании. Блочная разработка, формирование дизайн-системы и цифрового брендбука
            </p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-3.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Лендинг VK Капсула Про</h3>
            <p>Дизайн промо-лендинга для флагманской колонки VK</p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-4.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Маркетплейс недвижимости MR Group</h3>
            <p>UX-проектирование и дизайн интерфейса, который увеличил конверсию бронирования квартир</p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-5.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Сайт ЖК Новые академики</h3>
            <p>UX-проектирование, UI/UX-дизайн, разработка на Next.js сайта ЖК Главстроя</p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-6.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Промосайт Аш-тау</h3>
            <p>Промосайт, 3D-визуализация и карта глубин для бренда минеральной воды</p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-7.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Сайт R&D-центра НЛМК</h3>
            <p>Креативная концепция, разработка сайта и дизайн для направления R&D НЛМК</p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-8.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Интернет-магазин Stool Group</h3>
            <p>Онлайн-магазин с акцентом на заботу и комфорт. Создание бренд-платформы и digital-айдентики, разработка сервисных UX-решений
            </p>
          </Link>
        </li>
        <li className={styles.work}>
          <Link href="#">
            <div className={styles.image}>
              <Image src={'/portfolio-img-9.png'} width={606} height={606} alt={''} />
            </div>
            <h3>Сайт агропродукции Уралхим</h3>
            <p>Продуктовый сайт, каталог продукции, семантическое проектирование</p>
          </Link>
        </li>
      </ul>

      <Button className={styles.portfolioBtn}>все проекты</Button>
    </section>
  )
}
