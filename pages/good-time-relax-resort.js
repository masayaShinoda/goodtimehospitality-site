import Link from 'next/link'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import Layout from '../components/layout'
import GT_RR_Tabs from '../components/gt-rr-tabs'
import GT_RR_Maps from '../components/gt-rr-map'
import GT_RR_Video from '../components/gt-rr-vid-embed'

import { bungalowsContent } from '../components/content/bungalowsContent'
import { dormitoriesContent } from '../components/content/dormitoriesContent'

import styles from '../styles/subpage.module.scss';
import 'react-medium-image-zoom/dist/styles.css'

// images import
import gt_rr_logo_white_text from "../public/images/goodtimerelaxresort-logo-white-text_result.webp"
import gt_rr_interior_1 from '../public/images/gt-rr/SRN09144_result.webp'
import gt_rr_exterior_bokor_bg from '../public/images/gt-rr/SRN07369_result.webp'
import gt_rr_pool_bokor_view from '../public/images/gt-rr/SRN07340_result.webp'
import phoneIcon from '../public/icons/phone_result_transparent.png'
import fbIcon from '../public/icons/fb-icon-margins.png'
import booking_dot_com_logo_white from '../public/images/Booking.Com-logo-white_result.webp'
import agoda_logo from '../public/images/agoda-logo.svg'
import tripadvisor_logo from '../public/images/tripadvisor.svg'

import gt_rr_activity_kayaking from '../public/images/gt-rr/activities/DSC09092_result.webp'
import gt_rr_activity_gym_spa from '../public/images/gt-rr/activities/SRN09101_result.webp'
import gt_rr_activity_poolside_bar from '../public/images/gt-rr/activities/SRN09113_result.webp'
import gt_rr_activity_watercraft from '../public/images/gt-rr/activities/SRN07107_result.webp'

import divider_kbach_khmer_hori_lines_1920 from '../public/images/SVG/khmer-ornament-1-1920-hori-with-lines.svg'

export default function GoodTimeRelaxResort() {

    const seoDesc = "Surrounded by the Kampot River and set in unparalleled tranquility for complete privacy, each of our resort’s beautiful 2-room bungalow structures is unmatched, specially designed for memorable experiences."

    const khmer_hori_line = <Image
    width="1920" height="20"
    src={divider_kbach_khmer_hori_lines_1920} 
    alt="kbach khmer dividing line"
    className={styles.divider_kbach_khmer_hori_lines}
    />

    const gt_rr_activity_images = [
        {
            desc: 'Kayaking',
            src: gt_rr_activity_kayaking,
            alt: 'Kayaking'
        },
        {
            desc: 'Gym & Spa',
            src: gt_rr_activity_gym_spa,
            alt: 'Gym & Spa'
        },
        {
            desc: 'Poolside Bar',
            src: gt_rr_activity_poolside_bar,
            alt: 'Poolside Bar'
        },
        {
            desc: 'Watercraft',
            src: gt_rr_activity_watercraft,
            alt: 'Watercraft'
        },
    ]

    const bungalows_fallback_bg = 'images/gt-rr/bungalow/SRN09142-edited_result.jpg'
    const dormitories_fallback_bg = 'images/gt-rr/dormitory-4-beds/SRN07244-edited_result.jpg'

    return (
    <>
    <Layout
    pageName="Good Time Relax Resort"
    seoDesc={seoDesc}
    ogImage="images/og_image_SRN09142_result.jpg"
    >
        <div className={styles.subpageContainer}>
            <div className={styles.gt_rr}>
                <section 
                className={styles.sec_1}
                >
                    <div
                    className={styles.sec_1_bg}
                    style={{backgroundImage: `url(${gt_rr_interior_1.src})`}}
                    />               
                    <div className={styles.sec_1_content}>
                        <Image
                        src={gt_rr_logo_white_text} 
                        alt="Good Time Relax Resort logo"
                        width="200" height="200"
                        className={styles.sec_1_logo + ` animate__animated animate__fadeInDown`}
                        loading="lazy" placeholder="blur"
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
                                flexDirection: `row`, justifyContent: `center`, flexWrap: `wrap`,
                                marginTop: `2.5rem`
                                }}
                                className={styles.socialLinksContainer}    
                            >

                                <Link href="tel:+85599313535">
                                    <a 
                                    id="tel_link"
                                    title="Call 099 313 535"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: `2px solid #ececec`, borderRadius: `100%`,
                                        transition: `all 150ms ease-in`
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
                                        width="40"
                                        height="40"
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
                                        transition: `all 150ms ease-in`
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
                                        width="40"
                                        height="40"
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
                                        padding: `.75rem`, transition: `all 150ms ease-in`
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
                                <Link href="https://www.agoda.com/good-time-relax-resort/hotel/kampot-kh.html">
                                    <a 
                                    id="agoda_link"
                                    title="View resort on Agoda"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: "2px solid #ececec", borderRadius: `.25rem`,
                                        padding: `.75rem`, transition: `all 150ms ease-in`
                                    }}
                                    onMouseOver={() => {
                                        const element = document.getElementById('agoda_link')
                                        element.style.background = "#AF8C40"
                                    }}
                                    onMouseLeave={() => {
                                        const element = document.getElementById('agoda_link')
                                        element.style.background = "0"
                                    }}
                                    >
                                        <Image 
                                        src={agoda_logo} 
                                        alt="Agoda" 
                                        width="70"
                                        height="20"
                                        />
                                    </a>
                                </Link>
                                <Link href="https://www.tripadvisor.com/Hotel_Review-g21367060-d23821043-Reviews-Good_Time_Relax_Resort-Kampong_Kraeng_Kampot_Province.html?m=19905">
                                    <a 
                                    id="tripadvisor_link"
                                    title="View resort on Tripadvisor"
                                    style={{
                                        display: `flex`, flexDirection: `row`, alignItems: `center`,
                                        color: `#fff`, outline: "2px solid #ececec", borderRadius: `.25rem`,
                                        padding: `.75rem`, transition: `all 150ms ease-in`
                                    }}
                                    onMouseOver={() => {
                                        const element = document.getElementById('tripadvisor_link')
                                        element.style.background = "#AF8C40"
                                    }}
                                    onMouseLeave={() => {
                                        const element = document.getElementById('tripadvisor_link')
                                        element.style.background = "0"
                                    }}
                                    >
                                        <Image 
                                        src={tripadvisor_logo} 
                                        alt="Tripadvisor" 
                                        width="70"
                                        height="20"
                                        />
                                    </a>
                                </Link>
                            </span>
                        </span>
                    </div>
                </section>

                <section className={styles.sec_2}>
                    {/* <span className={styles.sec_2_heading_span}>
                    <h2>
                    Bokor Mountain View
                    </h2>
                    </span> */}
                    <div 
                    className={styles.sec_2_content} 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    >   
                        <div className={styles.sec_2_left_img_container}>
                            <Zoom zoomMargin={15} overlayBgColorEnd="rgba(247, 240, 182, .5)"> 
                            <Image 
                            src={gt_rr_exterior_bokor_bg} 
                            // width="100%" height="100%"
                            width="1500" height="1000"
                            alt="Good Time Relax Resort photo with Bokor mountain in background" 
                            loading="lazy"
                            placeholder="blur"
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
                            <Zoom zoomMargin={15} overlayBgColorEnd="rgba(247, 240, 182, .5)"> 
                            <Image
                            src={gt_rr_pool_bokor_view} 
                            // width="100%" height="100%"
                            width="1500" height="1000"
                            alt="Good Time Relax Resort photo with Bokor mountain in background" 
                            loading="lazy"
                            placeholder="blur"
                            // style={{backgroundColor: `#333`}}
                            />
                            </Zoom>
                        </div>
                    </div>
                </section>
                <section className={styles.vid_section}>
                    {khmer_hori_line}
                    <div className={styles.vid_embed_container}>
                        <GT_RR_Video />
                    </div>
                </section>
                <section className={styles.sec_3}>
                    <div 
                    className={styles.sec_3_content}>
                        <div className={styles.sec_3_left_div}>
                            <h2>Activities</h2>
                        </div>
                        <div 
                        className={styles.sec_3_right_div}
                        data-aos="fade-left"
                        data-aos-duration="500"
                        >
                            <p>
                            Not only does the resort offer supreme natural surroundings, our valued guests can also enjoy many joyous activities such as fishing right from your balcony, kayaking along
                            the river, taking pleasure from having snacks and drinks at the poolside, having a cup of tea with
                            your partner/business partner, delighting yourself by walking along the long wooden bridge or rejuvenating at the Spa.
                            </p>
                            <div className={styles.sec_3_right_gallery}>
                            {gt_rr_activity_images.map(i => {
                            return (
                                <div key={i.desc}>
                                    <Zoom zoomMargin={15} overlayBgColorEnd="rgba(247, 240, 182, .5)"> 
                                    <Image
                                    src={i.src}
                                    // width="100%" height="100%"
                                    width="1500" height="1000"
                                    alt={i.alt}
                                    loading="lazy"
                                    placeholder="blur"
                                    />
                                    </Zoom>
                                    {/* <p>{i.desc}</p> */}
                                </div>
                                )
                            })}
                            </div>

                        </div>
                    </div>
                    {khmer_hori_line}
                </section>
                <section className={styles.sec_4}>
                    <div className={styles.sec_4_content}>
                        <div className={styles.sec_4_div_1}>
                            <span className={styles.sec_4_heading_span}>
                            <h2>Bungalows</h2>
                            </span>
                            <div className={styles.sec_4_div_1_content}>
                                <GT_RR_Tabs 
                                content={bungalowsContent} 
                                fallback_bg={bungalows_fallback_bg}
                                />
                            </div>

                        </div>
                        <div className={styles.sec_4_div_2}>
                            <span className={styles.sec_4_heading_span}>
                            <h2>Dormitories</h2>
                            </span>
                            <div className={styles.sec_4_div_2_content}>
                                <GT_RR_Tabs 
                                content={dormitoriesContent}
                                fallback_bg={dormitories_fallback_bg}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sec_5}>
                    <span className={styles.sec_5_heading_span}>
                        <h2>Location</h2>
                    </span>
                    <GT_RR_Maps />
                </section>
            </div>
        </div>
    </Layout>
    </>
    )
}