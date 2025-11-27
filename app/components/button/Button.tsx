import { ButtonProps } from './Button.interface';
import styles from './Button.module.css';

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
