import MessengerComponent from 'react-messenger-customer-chat';
import Layout from '../../components/layout'
import styles from '../../styles/subpage.module.css';

export default function GoodTimeRelaxResort() {

    return (
        <>
            <Layout>
                <div className={styles.background}>
                    <img src="/images/gt-rr-hero-1_result.webp" alt="background" />
                </div>
                <div className={styles.subpageContainer} style={{marginTop: `5em`}}>
                    <img 
                        width="280"
                        height="280"
                        src="/images/goodtimerelaxresort-logo_result.webp" 
                        alt="Good Time Relax Resort logo" 
                    />
                    <h1 style={{fontSize: `5em`, color: `#fcfcfc`}}>
                        COMING SOON
                    </h1>
                </div>
                {
                    typeof window !== 'undefiend' && (
                        <MessengerComponent
                        pageId="111918520338184"
                        // appId="<APP_ID>"
                        // htmlRef="<REF_STRING>"
                        />
                    )
                }

            </Layout>
        </>
    )
}