import { TgContactProps } from './TgContact.interface';
import styles from './TgContact.module.css';

export const TgContact = ({ className }: TgContactProps) => {
  return (
    <div className={`${styles.telegram} ${className}`}>
      <p>Telegram для связи</p>
      <a href="#">@onlydigitalagency</a>
    </div>
  )
}
