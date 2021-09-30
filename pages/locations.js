import Layout from '../components/layout'
import LocationCard from '../components/locationCard'
import styles from '../styles/locations.module.css'

export default function Locations() {

    return (
        <Layout pageName="Locations">
            <span style={{padding: `50px 0`, display: `flex`, flexDirection: `column`, alignItems: `center`}}>
                <h1>Locations</h1> 
            </span>
            <div className={styles.locationsContainer}>
                <LocationCard 
                    title="Kampot"
                    desc="Our resorts and vacation homes are ideal for a vacation in southern Cambodia's beautiful seaside province."
                    callToAction="/"
                    bg="/thumbnail/thumb-kampot.webp"
                />
                <LocationCard 
                    title="Sihanoukville"
                    desc="With easy access to the country's most beautiful beaches, a stay at our Sihanoukville resort is sure to be memorable."
                    callToAction="/"
                    bg="/thumbnail/thumb-sihanoukville.webp"
                />
                <LocationCard 
                    title="Phnom Penh"
                    desc="Check out our apartments that we have on offer for our dear customers."
                    callToAction="/"
                    bg="/thumbnail/thumb-pp.webp"
                />
            </div>
        </Layout>
    )
}