import Layout from '../components/layout'
import Head from 'next/head'

export default function Resorts() {
    const pageName = "Vacation Homes"
    
    return (
    <Layout pageName={pageName}>
        <Head>
        <meta name="robots" content="noindex" />
        </Head>
        <span style={{padding: `50px 0`, display: `flex`, flexDirection: `column`, alignItems: `center`}}>
            <h1 style={{marginBottom: `1.4rem`}}>{pageName}</h1>
            <p 
            style={{fontSize: `5rem`, color: `#999`, padding: `2.5rem 0`}}
            >
            Page coming soon.</p>
        </span>
    </Layout>
    )
}