import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/about.module.scss'

export default function About() {
    const gtgh_logo = "images/logo-goodtimegrouphospitality.png"
    const fbIcon = '/icons/fb-icon-margins.png'
    const igIcon = '/icons/ig-icon.png'

    return (
    <Layout pageName="About">
    <div className={styles.aboutPageContainer}>
        <div className={styles.aboutContent}>
            {/* <h1>Good Time Hospitality Group</h1> */}
            <div className={styles.div_1}>
                <img src={gtgh_logo} alt="Good Time Hospitality Group logo" />      
            </div>
            <div className={styles.div_2}>
                <blockquote className={styles.blockquote}>
                <p>
                Our properties have distinctive look, making use of the untouched land in Cambodia. We aim to make our guests remember every second of their stay.                    
                </p>
                </blockquote>
                <span>
                    <Link href="https://www.facebook.com/goodtimerelaxresort/">
                        <a 
                        id="fb_link"
                        title="Like us on Facebook"
                        className={styles.social_link}
                        style={{
                            display: `inline-flex`, flexDirection: `row`, alignItems: `center`,
                            color: `#fff`, borderRadius: `100%`,
                            margin: `0 .5rem`, transition: `all 150ms ease-in`,
                        }}>
                            <img 
                            src={fbIcon} 
                            alt="facebook icon" 
                            width="40"
                            height="40"
                            />

                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/goodtimehospitalitygroup/">
                        <a 
                        id="fb_link"
                        title="Like us on Facebook"
                        className={styles.social_link}
                        style={{
                            display: `inline-flex`, flexDirection: `row`, alignItems: `center`,
                            color: `#fff`, borderRadius: `100%`,
                            margin: `0 .5rem`, transition: `all 150ms ease-in`,
                        }}>
                            <img 
                            src={igIcon} 
                            alt="facebook icon" 
                            width="40"
                            height="40"
                            />

                        </a>
                    </Link>
                </span>
            </div>

        </div>

    </div>
    </Layout>
    )
}