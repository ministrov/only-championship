import Image from 'next/image';
import { TgContactProps } from './TgContact.interface';
import styles from './TgContact.module.css';

export const TgContact = ({ className }: TgContactProps) => {
  return (
    <div className={`${styles.telegram} ${className}`}>
      <p>Telegram для связи</p>
      <a href="#">@onlydigitalagency <Image className={styles.tgIconMobile} src={'/tg-icon.svg'} width={14} height={14} alt={''} /></a>
    </div>
  )
}
