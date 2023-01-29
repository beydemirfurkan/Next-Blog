import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header>
      <Head>
        <title>Next.js Test</title>
      </Head>
      <nav className={styles.navLink}>
          <Link className="navLink" href="/">Home</Link>
          <Link className="navLink" href="/about">About</Link>
      </nav>
    </header>

  )
}

export default Header