import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css'
import mainNavigationItem from '../components/mainNavigationItem.js'
import MainNavigationItem from '../components/mainNavigationItem.js';

export default function Layout({children, home}){
  return (
  <div>
    <Head>
      <meta name="description" content="merchants of backpacks and outdoor wear" />
    </Head>
    <header className={styles.siteHeader}>
      {
        home ? (
          <>
          <div className={styles.logowrap}>
            <Image 
              src={'/images/detour-logo.svg'}
              alt={'logo'}
              width={135}
              height={90}
            />
          </div>
          <h1 className={styles.title}>Detour</h1>
          </>
        ) : (
          <>
          <div className={styles.logowrap}>
            <Link href="/">
              <Image 
                src={'/images/detour-logo.svg'}
                alt={'logo'}
                width={135}
                height={90}
              />
            </Link>
          </div>
          <p className={styles.subtitle}>Detour</p>
          </>
        )
      }
      <nav className={styles.mainNavigation}>
        <div>
          <ul className={styles.mainNavigationItems}>
            <MainNavigationItem href="/">
              Home
            </MainNavigationItem>
            <MainNavigationItem href="/products">
              Products
            </MainNavigationItem>
            <MainNavigationItem href="/" additionalStyle={styles.cartLink}>
              <a class={styles.mainNavigationLink}>
                  <span class={styles.cartPrice}>$44.45</span>
                  Cart
              </a>
            </MainNavigationItem>
          </ul>
        </div>
      </nav>
    </header>
    {children}
    <footer></footer>
  </div>
  )
}