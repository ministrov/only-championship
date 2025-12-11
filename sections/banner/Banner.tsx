import Image from 'next/image';
import { Button } from '@/app/components/button/Button';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <h2 className='visually-hidden'>A section of banner with a carousel of slides</h2>

      <div className={styles.slides}>
        <div className={styles.slide}>
          <div className={styles.mainWrapper}>
            <div className={styles.main}>
              <h3>недвижимость</h3>
              <div className={styles.textWithIcons}>
                <span>Формируем <span><Image src={'/banner-icon-1.svg'} width={44} height={35} alt={''} /></span></span>
                <span><Image src={'/banner-icon-2.png'} width={44} height={44} alt={''} /> ценность <span>бренда</span><Image src={'/banner-icon-3.png'} width={44} height={44} alt={''} />  <span>ЖК</span></span>
                <span className={styles.earthBox}> <span className={styles.earth}><Image src={'/banner-icon-4.png'} width={32} height={32} alt={''} /></span> <span className={styles.digitalSpace}>в digital - среде</span></span>
              </div>
              <p>Создаем digital-пространство для девелоперов и проектов ЖК, находя баланс идентичности бренда и сервисности.</p>
              <Button className={styles.bannerBtn}>Подробнее</Button>
            </div>
            {/* <div className={styles.images}></div> */}
          </div>

          <div className={styles.pagination}>
            <button type='button' className={`${styles.paginationBtn} ${styles.active}`}>
              <span className='visually-hidden'>button of the slide 1</span>
            </button>
            <button type='button' className={styles.paginationBtn}>
              <span className='visually-hidden'>button of the slide 2</span>
            </button>
          </div>
        </div>

        <div className={styles.slide}>
          <div className={styles.mainWrapper}>
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
      </div>
    </section>
  )
}
