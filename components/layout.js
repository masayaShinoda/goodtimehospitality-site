import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/layout.module.scss'

export default function Layout({ children, pageName, seoDesc }) {

    return (
        <div className={styles.layout}>
        <Head>
            <meta name="description" content="Vacation home rental in Cambodia." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {pageName ? 
            <NextSeo
                title={`${pageName} | Good Time Hospitality Group`}
                description={
                    seoDesc ? seoDesc : 
                    "Vacation home rental in Cambodia."
                }
                keywords="goodtime, goodtimegroup, good time, good time cambodia, good time hospitality, good time hospitality group, goodtime vacation home, vacation home rental, vacation home rental in cambodia, good time resort"
            /> 
            :   <NextSeo
                    title="Good Time Hospitality Group "
                    description="Vacation home rental in Cambodia."
                    keywords="goodtime, goodtimegroup, good time, good time cambodia, good time hospitality, good time hospitality group, goodtime vacation home, vacation home rental, vacation home rental in cambodia, good time resort"
                /> 
        }

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