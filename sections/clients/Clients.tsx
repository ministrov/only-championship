import Image from 'next/image';
import styles from './Clients.module.css';

export const Clients = () => {
  return (
    <section className={styles.clients}>
      <h2 className='visually-hidden'>Section of the Only clients</h2>

      <p>20 клиентов — крупнейшие компании из списка Forbes. Более 100 реализованных проектов</p>

      <ul className={styles.clients}>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={''} width={12} height={12} alt={''} />
        </li>
      </ul>
    </section>
  )
}
