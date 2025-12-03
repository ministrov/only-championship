import Image from 'next/image';
import { Button } from '@/app/components/button/Button';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <h2 className='visually-hidden'>A section of banner with a carousel of slides</h2>

      <div className={styles.slides}>
        <div className={styles.slide}>
          <div className={styles.main}>
            <h3>недвижимость</h3>
            <div className={styles.textWithIcons}>
              <span>Формируем</span>
              <span>img</span>
              <span>ценность</span>
              <span>бренда</span>
              <span>img</span>
              <span>ЖК</span>
              <span>img</span>
              <span>в digital - среде</span>
            </div>
            <p>Создаем digital-пространство для девелоперов и проектов ЖК, находя баланс идентичности бренда и сервисности.</p>
            <Button className={styles.bannerBtn}>Подробнее</Button>
          </div>
          <div className={styles.images}>
            <Image src={'/banner-img-1.png'} width={376} height={261} alt={''} />
            <Image src={'/banner-img-2.png'} width={242} height={524} alt={''} />
            <Image src={'/banner-img-3.png'} width={432} height={373} alt={''} />
            <Image src={'/banner-img-4.png'} width={270} height={270} alt={''} />
          </div>
        </div>

        <div className={styles.slide}>
          <div className={styles.main}>
            <h3>mobile app</h3>
            <div className={styles.textWithIcons}>
              <span>Проектируем</span>
              <span>img</span>
              <span>мобильные</span>
              <span>приложения</span>
            </div>
            <p>Разрабатываем приложения для мобильных устройств, решая реальные запросы пользователей.</p>
            <Button className={styles.bannerBtn}>Подробнее</Button>
          </div>
          <div className={styles.images}>
            <Image src={'/banner-img-5.png'} width={315} height={176} alt={''} />
            <Image src={'/banner-img-6.png'} width={410} height={644} alt={''} />
            <Image src={'/banner-img-7.png'} width={471} height={644} alt={''} />
          </div>
        </div>

        <div className={styles.pagination}></div>
      </div>
    </section>
  )
}
