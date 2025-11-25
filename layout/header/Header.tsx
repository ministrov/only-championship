import Image from 'next/image';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Image src={'/logo.svg'} width={82} height={27} alt={'Design studio logo'} />
        Header
      </div>
    </header>
  )
}
