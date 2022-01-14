import Link from 'next/link'
import Image from 'next/image'
import MessengerComponent from 'react-messenger-customer-chat';
import Layout from '../../components/layout'
import styles from '../../styles/subpage.module.css';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function GoodTimeRelaxResort() {
    const gt_rr_logo_white_text = "/images/goodtimerelaxresort-logo-white-text_result.webp"
    const gt_rr_interior_1 = '/images/gt-rr/SRN09144_result.jpg'
    const gt_rr_exterior_bokor_bg = '/images/gt-rr/SRN07369_result.webp'
    const gt_rr_pool_bokor_view = '/images/gt-rr/SRN07340_result.webp'
    const booking_dot_com_logo_white = '/images/Booking.Com-logo-white_result.webp'
    // const divider_kbach_khmer_hori_lines_512 = '/images/SVG/khmer-ornament-1-512-hori-with-lines.svg'
    const divider_kbach_khmer_hori_lines_1920 = '/images/SVG/khmer-ornament-1-1920-hori-with-lines.svg'
    const phoneIcon = '/icons/phone_result_transparent.png'
    const fbIcon = '/icons/fb-icon-margins.png'
    const seoDesc = "Surrounded by the Kampot River and set in unparalleled tranquility for complete privacy, each of our resort’s beautiful 2-room bungalow structures is unmatched, specially designed for memorable experiences."

    return (
    <>
    <Layout
        pageName="Good Time Relax Resort"
        seoDesc={seoDesc}
    >
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
                        src={gt_rr_logo_white_text} 
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
                                flexDirection: `row`, justifyContent: `center`,
                                marginTop: `2.5rem`
                                }}>

                                <Link href="tel:+85599313535">
                                    <a 
                                    id="tel_link"
                                    title="Call 099 313 535"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: `2px solid #ececec`, borderRadius: `100%`,
                                        margin: `0 1rem`
                                    }}
                                    onMouseOver={() => {
                                        const element = document.getElementById('tel_link')
                                        element.style.outline = "2px solid #ececec"
                                        element.style.background = "#AF8C40"
                                    }}
                                    onMouseLeave={() => {
                                        const element = document.getElementById('tel_link')
                                        element.style.background = "0"
                                    }}>
                                        <Image 
                                        src={phoneIcon} 
                                        alt="telephone icon" 
                                        width="42"
                                        height="42"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.facebook.com/goodtimerelaxresort/">
                                    <a 
                                    id="fb_link"
                                    title="Like us on Facebook"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: `2px solid #ececec`, borderRadius: `100%`,
                                        margin: `0 1rem`
                                    }}
                                    onMouseOver={() => {
                                        const element = document.getElementById('fb_link')
                                        element.style.outline = "2px solid #ececec"
                                        element.style.background = "#AF8C40"
                                    }}
                                    onMouseLeave={() => {
                                        const element = document.getElementById('fb_link')
                                        element.style.background = "0"
                                    }}>
                                        <Image 
                                        src={fbIcon} 
                                        alt="facebook icon" 
                                        width="42"
                                        height="42"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.booking.com/hotel/kh/good-time-relax-resort.html">
                                    <a 
                                    id="booking_dot_com_link"
                                    title="View resort on Booking.com"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: "2px solid #ececec", borderRadius: `.25rem`,
                                        margin: `0 1rem`, padding: `.75rem`
                                    }}
                                    onMouseOver={() => {
                                        const element = document.getElementById('booking_dot_com_link')
                                        element.style.background = "#AF8C40"
                                    }}
                                    onMouseLeave={() => {
                                        const element = document.getElementById('booking_dot_com_link')
                                        element.style.background = "0"
                                    }}
                                    >
                                        <Image 
                                        src={booking_dot_com_logo_white} 
                                        alt="Booking.com" 
                                        width="120"
                                        height="20"
                                        />
                                    </a>
                                </Link>
                            </span>
                        </span>
                    </div>
                    
                </section>
                <section className={styles.sec_2}>
                    <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    >
                        Bokor Mountain View
                    </h2>
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
                <section className={styles.sec_3}>
                    <img
                    src={divider_kbach_khmer_hori_lines_1920} 
                    alt="kbach khmer dividing line"
                    className={styles.divider_kbach_khmer_hori_lines}
                    />
                    <div className={styles.sec_3_content}>
                        <div className={styles.sec_3_left_div}>
                            <h2>Activities</h2>
                        </div>
                        <div className={styles.sec_3_right_div}>
                            <p>
                            Not only does the resort offer supreme natural surroundings, our valued guests can also enjoy many joyous activities such as fishing right from your balcony, kayaking along
                            the river, taking pleasure from having snacks and drinks at the poolside, having a cup of tea with
                            your partner/business partner, delighting yourself by walking along the long wooden bridge or rejuvenating at the Spa.
                            </p>
                            <div className={styles.sec_3_right_tabs}>
                                
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
    </>
    )
}