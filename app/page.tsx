import { Hero } from '../sections/hero/Hero';
import { Portfolio } from '@/sections/portfolio/Portfolio';
import { Clients } from '../sections/clients/Clients';
import { Projects } from '../sections/projects/Projects';
import { Banner } from '../sections/banner/Banner';
import { Awards } from '@/sections/awards/Awards';
// import styles from './page.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Portfolio />
      <Clients />
      <Projects />
      <Banner />
      <Awards />
    </div>
  );
}
