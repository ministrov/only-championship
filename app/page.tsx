import { Hero } from './components/hero/Hero';
import { Portfolio } from './components/portfolio/Portfolio';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Portfolio />
      <p>Main</p>

      <h1 className={styles.h1}>Creative digital production</h1>
    </div>
  );
}
