import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Good Time Hospitality Group</title>
        <meta name="description" content="Vacation Home Rental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          width="256"
          height="256"
          objectFit="contain"
          src="/images/GoodTimeGroup_HOSPITALITY-03_result_512.webp" 
          className={styles.comingSoonLogo}
        />
        <span className={styles.comingSoonSpan} style={{margin: `0 2.5rem`}}>
          <h1>COMING SOON</h1>
          <p>Site is under construction.</p>
          <p>គេហទំព័រនឹងមកដល់ឆាប់ៗនេះ។</p>
          <div className={styles.socialContainer} style={{marginTop: `10px`}}>
            <a href="https://www.facebook.com/Good-Time-Hospitality-Group-106046934410922/">
              <Image src="/icons/Asset 3.png" width="35" height="35" alt="FB" 
              />
            </a>
            <a href="https://www.instagram.com/goodtimehospitalitygroup/" style={{marginLeft: `10px`}}>
              <Image src="/icons/Asset 4.png" width="35" height="35" alt="IG"
              />
            </a>
          </div>
        </span>

      </main>
    </div>
  )
}
