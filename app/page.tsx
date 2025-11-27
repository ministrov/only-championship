import { Hero } from './components/hero/Hero';
import { Portfolio } from './components/portfolio/Portfolio';
import { Clients } from './components/clients/Clients';
import { Projects } from './components/projects/Projects';
import { Banner } from './components/banner/Banner';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Portfolio />
      <Clients />
      <Projects />
      <Banner />
      <p>Main</p>

      <h1 className={styles.h1}>Creative digital production</h1>
    </div>
  );
}
