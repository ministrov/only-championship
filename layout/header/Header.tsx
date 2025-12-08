'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react'
import styles from './Header.module.css';
import { MobileNav } from '@/app/components/mobileNav/MobileNav';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    console.log(`isOpen: ${isOpen}`);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href={'/'} className={styles.logo}>
            <Image src={'/logo.svg'} width={82} height={27} alt={'Design studio logo'} />
            <span className="visually-hidden">На главную</span>
          </Link>

          <nav className={styles.navigation}>
            <ul className={styles.mainNav}>
              <li>
                <Link href={'#'}>Проекты</Link>
              </li>
              <li>
                <Link href={'#'}>Компания</Link>
              </li>
              <li>
                <Link href={'#'}>Направления</Link>
              </li>
              <li>
                <Link href={'#'}>Контакты</Link>
              </li>
              <li>
                <Link href={'#'}>Блог</Link>
              </li>
              <li>
                <Link href={'#'}>Карьера</Link>
              </li>
            </ul>

            <div className={styles.favorite}>
              <span>40</span>
              <button type='button' className={styles.favoriteBtn}>
                <Image src={'/star.svg'} width={24} height={24} alt={'A favorite button as a star icon'} />
              </button>
            </div>
          </nav>

          <button className={styles.burger}>
            <Hamburger
              toggled={isOpen}
              toggle={handleToggle}
              size={22}
              color="#000000"
              easing="ease-in-out"
              distance="md"
              hideOutline={false}
              label="Show menu"
            />
          </button>
        </div>
      </div>

      {isOpen && <MobileNav />}
    </header>
  )
}
