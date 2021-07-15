import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function MainNavigationItem({href,children,additionalStyle}){
  return(
    <li className={`${styles.mainNavigationItem} ${additionalStyle}`}>
      <Link href={href}>
        <a class={styles.mainNavigationLink}>{children}</a>
      </Link>
    </li>
  )
}