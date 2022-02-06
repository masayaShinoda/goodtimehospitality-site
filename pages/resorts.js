import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/resorts.module.scss'

export default function Resorts() {
    const pageName = "Resorts"

    return (
        <Layout pageName={pageName}>
            <div className={styles.twinContainer}>
                <div 
                className={styles.choice}
                style={{
                    backgroundImage: `url("/thumbnail/gt-rr-bokor-bg-thumb.webp")`
                }}>
                    <Link href="/good-time-relax-resort">
                        <a>
                        <img 
                        src="/images/goodtimerelaxresort-logo_result.webp" 
                        alt="Good Time Relax Resort logo" 
                        className="animate__animated animate__fadeInLeft"
                        />
                        </a>
                    </Link>
                </div>
                <div 
                className={styles.choice} 
                style={{
                    backgroundImage: `url("/images/gt-br-choice_result.webp")`
                }}>
                    <Link href="/good-time-boutique-hotel">
                        <a>
                        <img 
                        src="/images/goodtimeboutiquehotel-logo_result.webp" 
                        alt="Good Time Boutique Hotel" 
                        className="animate__animated animate__fadeInRight"
                        />
                        </a>
                    </Link>
                </div>

            </div>
        </Layout>
    )
}