import Layout from '../components/layout'
import LocationCard from '../components/locationCard'
import styles from '../styles/locations.module.css'

export default function Locations() {

    return (
        <Layout pageName="Offerings">
            <span className={styles.headerText}>
                <h1 id="pageTitle">Offerings</h1> 
            </span>
            <div className={styles.locationsContainer}>
                <LocationCard
                    title="Resorts"
                    desc="Located in environments with unparalleled tranquility, specially designed for memorable experiences."
                    callToAction="/resorts"
                    bg="thumbnail/gt-rr-choice_result.webp"
                />
                <LocationCard 
                    title="Vacation Homes"
                    desc="Page coming soon."
                    callToAction="/vacation-homes"
                    bg="/thumbnail/asset-4result.webp"
                />
                <LocationCard 
                    title="Apartments"
                    desc="Page coming soon."
                    callToAction="/apartments"
                    bg="/thumbnail/asset-3result.webp"
                />
                {/* <LocationCard 
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
                /> */}
            </div>
        </Layout>
    )
}