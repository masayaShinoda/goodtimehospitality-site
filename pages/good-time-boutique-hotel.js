import MessengerComponent from 'react-messenger-customer-chat';
import Layout from '../components/layout'
import styles from '../styles/subpage.module.scss';

export default function GoodTimeBoutiqueHotel() {
    const fb_iframe_width = "500"
    const fb_iframe_height = "500"

    return (
    <>
        <Layout>
            <div className={styles.gt_bh_background}>
                <img src="images/gt-br-choice_result.webp" alt="background" />
            </div>
            <div className={styles.subpageContainer}>
                <div className={styles.gt_bh}>

                <img 
                    width="280"
                    height="280"
                    src="images/goodtimeboutiquehotel-logo_result.webp" 
                    style={{filter: `grayscale(100%) brightness(10)`}}
                    alt="Good Time Relax Resort logo" 
                />
                <iframe src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGOODTIMEBOUTIQUEHOTEL&tabs=timeline&width=${fb_iframe_width}&height=${fb_iframe_height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
                width={fb_iframe_width}
                height={fb_iframe_height}
                style={{border: `none`, overflow: `hidden`}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
            {/* {
                typeof window !== 'undefiend' && (
                    <MessengerComponent
                    pageId="111918520338184"
                    // appId="<APP_ID>"
                    // htmlRef="<REF_STRING>"
                    />
                )
            } */}

        </Layout>
    </>
    )
}