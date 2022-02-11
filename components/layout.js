import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/layout.module.scss'

export default function Layout({ children, pageName, seoDesc, ogImage }) {

    // console.log(ogImage)
    const goodTimeGroupLogo = 'images/GoodTimeGroup_HOSPITALITY-03_result_512.webp'
    return (
        <div className={styles.layout}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NextSeo
            title={pageName ? `${pageName} | Good Time Hospitality Group` : `Good Time Hospitality Group`}
            description={
                seoDesc ? seoDesc : 
                "Vacation home rental in Cambodia."
            }
            openGraph={{
                url: 'https://goodtimehospitality.com',
                title: pageName ? `${pageName} | Good Time Hospitality Group` : `Good Time Hospitality Group`,
                description: seoDesc ? seoDesc : "Vacation home rental in Cambodia.",
                images: [
                    {
                        url: ogImage ? ogImage.src : goodTimeGroupLogo,
                        alt: "Good Time Hospitality"
                    }
                ]

            }}
            // keywords="goodtime, goodtimegroup, good time, good time cambodia, good time hospitality, good time hospitality group, goodtime vacation home, vacation home rental, vacation home rental in cambodia, good time resort"
        />
        <Nav />

        <main>
            <div 
            className={styles.main_bg} 
            id="mainBg"></div>
            {children}
        </main>
        <Footer />


        </div>
    )
}