import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import layoutStyles from '../styles/HomeLayout.module.css'
import backpack1 from '../public/images/backpack.jpg';
import backpack2 from '../public/images/another-bag.jpg';
import backpack3 from '../public/images/hiking-bag.jpg';;

export default function Home() {
  return (
    <Layout home>
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>

          <div className={layoutStyles.grid}>
            
            <article className={`${styles.featureProduct} ${styles.product}`}>
              <div className={styles.featureImageWrapper}>
                <Image
                  src={backpack1}
                  alt="backpack"
                  layout="fill"
                />
              </div>
              <div className={styles.information}>
                <header>
                  <h2>Our Coolest Product</h2>
                </header>
                <div className={`${styles.entryContent} ${styles.featureContent}`}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  </p>
                </div>
                <Link href="/">
                  <a>Learn More</a>
                </Link>
              </div>
            </article>
            
            <article id={styles.secondProduct} className={`${styles.secondaryProduct} ${styles.product}`}>
              <div className={styles.secondaryProductImageWrapper}>
                <Image
                  src={backpack2}
                  alt="stylish backpack"
                />
              </div>
              <div className={styles.information}>
                <header>
                  <h2>Another Cool Product</h2>
                </header>
                <div className={styles.entryContent}>
                  <p>Vivamus at elementum mi, phasellus dignissim enim dolor</p>
                </div>
                <Link href="/">
                  <a>Learn More</a>
                </Link>
              </div>
            </article>

            <article id={styles.thirdProduct} className={`${styles.secondaryProduct} ${styles.product}`}>
              <div className={styles.secondaryProductImageWrapper}>
                <Image
                  src={backpack3}
                  alt="functional backpack"
                />
              </div>
              <div className={styles.information}>
                <header>
                  <h2>A Third Cool Product</h2>
                </header>
                <div className={styles.entryContent}>
                  <p>Curabitur ultricies dolor vel libero.</p>
                </div>
                <Link href="/">
                  <a>Learn More</a>
                </Link>
              </div>
            </article>
          </div>
        </main>
        <aside id={layoutStyles.secondaryContent}>
          <div>
            <h2>Most Popular Products</h2>
            <ul>
              <li><Link href="/"><a>The Daytripper</a></Link></li>
              <li><Link href="/"><a>The Mountain Goat</a></Link></li>
              <li><Link href="/"><a>The Trekker</a></Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
