import Image from 'next/image';
import styles from './Clients.module.css';

export const Clients = () => {
  return (
    <section className={styles.clients}>
      {/* <h2 className='visually-hidden'>Section of the Only clients</h2> */}
      <h2 className={styles.title}>20 клиентов — крупнейшие компании из списка Forbes. Более 100 реализованных проектов</h2>

      <ul className={styles.clientsList}>
        <li className={styles.client}>
          <Image src={'/clients-1.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-2.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-3.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-4.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-5.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-6.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-7.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-8.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-9.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-10.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-11.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-12.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-13.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-14.png'} width={293} height={200} alt={''} />
        </li>
        <li className={styles.client}>
          <Image src={'/clients-15.png'} width={293} height={200} alt={''} />
        </li>
      </ul>
    </section>
  )
}
