import { NextSeo } from 'next-seo'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/layout.module.scss'

export default function Layout({ children, pageName, seoDesc, ogImage, soleTitle }) {
    const token = '471202f89cdbcba570cb00dfa31609'

    const [layoutData, setLayoutData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://graphql.datocms.com/',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                    query: `{ 
                        bookLink {
                            id
                            url
                            updatedAt
                          }
                      }`
                  }),
                }
            )
            const data = await res.json()
            setLayoutData(data.data)
        }
        fetchData()
    }, [])



    const siteUrl = "https://goodtimehospitality.com"

    const goodTimeGroupLogo = 'images/GoodTimeGroup_HOSPITALITY-03_result_512.webp'
    return (
        <div className={styles.layout}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NextSeo
            title={soleTitle ? pageName : pageName ? `${pageName} | Good Time Hospitality Group` : `Good Time Hospitality Group`}
            description={
                seoDesc ? seoDesc : 
                "Vacation home rental in Cambodia."
            }
            openGraph={{
                url: siteUrl,
                title: pageName ? pageName : `Good Time Hospitality Group`,
                description: seoDesc ? seoDesc : "Vacation home rental in Cambodia.",
                images: [
                    {
                        url: ogImage ? `${siteUrl}/${ogImage}` : goodTimeGroupLogo,
                        alt: "Good Time Hospitality"
                    }
                ]

            }}
            // keywords="goodtime, goodtimegroup, good time, good time cambodia, good time hospitality, good time hospitality group, goodtime vacation home, vacation home rental, vacation home rental in cambodia, good time resort"
        />
        <Nav bookLinkURL={layoutData?.bookLink.url} />

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