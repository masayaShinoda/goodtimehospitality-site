import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/resorts.module.css'

export default function Resorts() {
    const pageName = "Resorts"

    return (
        <Layout pageName={pageName}>
            {/* <span style={{padding: `50px 0`, display: `flex`, flexDirection: `column`, alignItems: `center`}}>
                <h1 style={{marginBottom: `1.4rem`}}>{pageName}</h1>
            </span> */}
                <div className={styles.twinContainer}>
                    <div className={styles.choice} style={{backgroundImage: `url("/images/gt-rr-choice_result.webp")`}}>
                        <a>
                            <Link href="/resort/good-time-relax-resort">
                                    <img src="/images/goodtimerelaxresort-logo_result.webp" alt="Good Time Relax Resort logo" />

                            </Link>
                        </a>
                    </div>
                    <div className={styles.choice} style={{backgroundImage: `url("/images/gt-br-choice_result.webp")`}}>
                        <a>
                            <Link href="/resort/good-time-relax-resort">
                                <img src="/images/goodtimeboutiquehotel-logo_result.webp" alt="Good Time Boutique Hotel" />
                            </Link>
                        </a>


                    </div>

                </div>
        </Layout>

// homepage slideshow 50% size
// add footer with grey and kbach khmer


// wait for about page content

// resort -> 

// KPS:
// - for KPS, goodtime resort dont include yet
// - boutique hotel
// - goodtime apartment


// can use map directory: 

// contact options:
// - goodtimeresort (email, tel, ..etc)
    )
}