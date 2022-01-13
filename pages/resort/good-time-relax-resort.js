import Link from 'next/link'
import Image from 'next/image'
import MessengerComponent from 'react-messenger-customer-chat';
import Layout from '../../components/layout'
import styles from '../../styles/subpage.module.css';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function GoodTimeRelaxResort() {
    
    const gt_rr_interior_1 = '/images/gt-rr/SRN09144_result.jpg'
    const gt_rr_exterior_bokor_bg = '/images/gt-rr/SRN07369_result.webp'
    const gt_rr_pool_bokor_view = '/images/gt-rr/SRN07340_result.webp'
    // const divider_kbach_khmer_hori_lines_512 = '/images/SVG/khmer-ornament-1-512-hori-with-lines.svg'
    const divider_kbach_khmer_hori_lines_1920 = '/images/SVG/khmer-ornament-1-1920-hori-with-lines.svg'
    const phoneIcon = '/icons/phone_result_transparent.png'
    const fbIcon = '/icons/fb-icon-margins.png'

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
                    style={{backgroundImage: `url(${gt_rr_interior_1})`}}
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
                            <span style={{
                                display: `flex`, width: `100%`,
                                flexDirection: `row`, justifyContent: `center`
                                }}>

                                <Link href="tel:+85599313535">
                                    <a 
                                    title="Call 099 313 535"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: `2px solid #ececec`, borderRadius: `100%`,
                                        margin: `0 1rem`
                                    }}
                                    >
                                        <Image 
                                        src={phoneIcon} 
                                        alt="telephone icon" 
                                        width="42"
                                        height="42"
                                        />
                                    </a>
                                </Link>
                                <Link href="tel:+85599313535">
                                    <a 
                                    title="Call 099 313 535"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: `2px solid #ececec`, borderRadius: `100%`,
                                        margin: `0 1rem`
                                    }}
                                    >
                                        <Image 
                                        src={fbIcon} 
                                        alt="telephone icon" 
                                        width="42"
                                        height="42"
                                        />
                                    </a>
                                </Link>
                            </span>
                        </span>
                    </div>
                    
                </section>
                <section className={styles.sec_2}>
                    <div 
                    className={styles.sec_2_content} 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    >
                        <div className={styles.sec_2_left_img_container}>
                            <Zoom zoomMargin={100} overlayBgColorEnd="rgba(247, 240, 182, .25)"> 
                            <img 
                            src={gt_rr_exterior_bokor_bg} 
                            width="100%" height="100%"
                            alt="Good Time Relax Resort photo with Bokor mountain in background" 
                            loading="lazy"
                            />
                            </Zoom>
                        </div>
                        <div 
                        className={styles.sec_2_right_div}
                        >
                            <span>
                            <p>
                            Good Time Relax Resort introduces true Khmer hospitality by sharing with our valued guests a royal luxury. Named after King Sisowath Monivong, the Preah Monivong Bokor National Park, an national park on the highland established in 1993, designated as ASEAN Heritage Park, is offering a heavenly-like mountain view clearly visible from the resort.
                            </p>
                            </span>
                        </div>
                        <div className={styles.sec_2_right_img_container}>
                            <Zoom zoomMargin={100} overlayBgColorEnd="rgba(247, 240, 182, .25)"> 
                            <img 
                            src={gt_rr_pool_bokor_view} 
                            width="100%" height="100%"
                            alt="Good Time Relax Resort ppol photo with Bokor mountain in background" 
                            loading="lazy"
                            />
                            </Zoom>
                        </div>
                    </div>
                </section>
                <img 
                src={divider_kbach_khmer_hori_lines_1920} 
                alt="kbach khmer dividing line"
                className={styles.divider_kbach_khmer_hori_lines}
                />
            </div>

        </div>
    </Layout>
    </>
    )
}