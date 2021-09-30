import Layout from '../components/layout'

export default function Resorts() {
    const pageName = "Apartments"

    return (
        <Layout pageName={pageName}>
            <span style={{padding: `50px 0`, display: `flex`, flexDirection: `column`, alignItems: `center`}}>
                <h1 style={{marginBottom: `1.4rem`}}>{pageName}</h1>
                <p>Page is under construction. Stay tuned!</p>
            </span>
        </Layout>
    )
}