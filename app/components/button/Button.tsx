import { ButtonProps } from './Button.interface';
import styles from './Button.module.css';

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}
