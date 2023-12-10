import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from './Hero'
import Search from './Search'


export default function Home() {
  return (
    <>
      <Head>
        <title>Hibir Ethiopia</title>
      </Head>
      <main className={styles.main}>
        <Hero />
        <Search />
      </main>
    </>
  )
}
