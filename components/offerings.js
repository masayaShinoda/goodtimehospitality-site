import Link from 'next/link'
import styles from '../styles/offerings.module.css'

export default function Offerings() {
    
    return (
        <div className={styles.offeringsContainer}>
            <h1>What we offer</h1>
            <div className={styles.offeringsGrid}>
                <div className={styles.box}>
                    <Link href="/">
                        <a><font>Resorts</font></a>
                    </Link>
                </div>
                <div className={styles.box}>
                    <Link href="/">
                        <a><font>Vacation Homes</font></a>
                    </Link>
                </div>
                <div className={styles.box}>
                    <Link href="/">
                        <a><font>Apartments</font></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}