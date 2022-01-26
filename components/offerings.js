import Link from 'next/link'
import styles from '../styles/offerings.module.scss'

export default function Offerings() {
    
    return (
        <div className={styles.offeringsContainer}>
            <h1>What we offer</h1>
            <div className={styles.offeringsGrid + ` animate__animated animate__zoomInUp`}>
                <div className={styles.box}>
                    <Link href="/resorts">
                        <a><font>Resorts</font></a>
                    </Link>
                </div>
                <div className={styles.box}>
                    <Link href="/vacation-homes">
                        <a><font>Vacation Homes</font></a>
                    </Link>
                </div>
                <div className={styles.box}>
                    <Link href="/apartments">
                        <a><font>Apartments</font></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}