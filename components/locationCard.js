import Link from 'next/link'
import styles from '../styles/locations.module.css'

export default function LocationCard({ title, desc, callToAction, bg }) {

    return (
        <a
            className={styles.card + ` animate__animated animate__backInLeft`} 
            style={{backgroundImage: `url("${bg}")`}}
        >
            <Link href="/">
                <div className={styles.textContainer}>
                    <h1>{title}</h1>
                    <span className="animate__animated animate__fadeInUp">
                        <p>{desc}</p>
                    </span>

                </div>


            </Link>
        </a>
    )
}