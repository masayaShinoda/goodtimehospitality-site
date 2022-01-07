import MessengerComponent from 'react-messenger-customer-chat';
import Layout from '../../components/layout'
import styles from '../../styles/subpage.module.css';


export default function GoodTimeRelaxResort() {
    const gt_rr_interior_1 = '/images/gt-rr/SRN09144_result.webp'
    
    return (
    <>
    <Layout>
        <div className={styles.subpageContainer}>
            <div className={styles.gt_rr}>
                <section 
                className={styles.sec_1}
                >         
                    <div
                    className={styles.sec_1_bg}
                    style={{backgroundImage: `url(/images/gt-rr/SRN09144_result.jpg)`}}
                    />               
                    <div 
                    className={styles.sec_1_content}
                    >
                        <img 
                        src="/images/goodtimerelaxresort-logo_result.webp" 
                        alt="Good Time Relax Resort logo"
                        className={styles.sec_1_logo + ` animate__animated animate__fadeInDown`}
                        />
                        <span className="animate__animated animate__fadeInUp">
                            <h2>
                            A Memorable Experience
                            </h2>
                            <p>
                            Surrounded by the natural Kampot River and set in the unparalleled tranquility for a complete
                            privacy, each of our resort’s beautiful 2-room bungalow structure is unmatched, especially
                            designed for memorable experiences.
                            </p>
                        </span>
                    </div>
                    
                </section>
                <section className={styles.sec_2}>

                </section>
            </div>

        </div>
    </Layout>
    </>
    )
}