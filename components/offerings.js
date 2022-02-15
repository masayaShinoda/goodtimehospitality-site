import Link from 'next/link'
import styles from '../styles/offerings.module.scss'

export default function Offerings() {
    
    return (
        <div className={styles.offeringsContainer}>
            <h2>What we offer</h2>
            <div className={styles.offeringsGrid + ` animate__animated animate__zoomInUp`}>
                <div 
                className={styles.box}
                style={{backgroundImage: `url("thumbnail/gt-rr-bokor-bg-thumb.webp")`}}
                >
                    <Link href="/resorts">
                        <a><font>Resorts</font></a>
                    </Link>
                </div>
                <div 
                className={styles.box}
                style={{backgroundImage: `url("thumbnail/asset-4result.webp")`}}
                >
                    <Link href="/vacation-homes">
                        <a><font>Vacation Homes</font></a>
                    </Link>
                </div>
                <div 
                className={styles.box}
                style={{backgroundImage: `url("thumbnail/asset-3result.webp")`}}
                >
                    <Link href="/apartments">
                        <a><font>Apartments</font></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}