import '../css/AirbnbExperiences.css'
import data from '../data/data'

import AirbnbCard from '../components/AirbnbCard'
import AirbnbHero from '../components/AirbnbHero'
import AirbnbNavbar from '../components/AirbnbNavbar'


function AirbnbExperiencesPage() {

    const cards = data.map(( data ) => {
        return (
            <AirbnbCard
                key={data.id}
                {...data}
            />
        )
    })

    return (
        <>
            <div id="airbnb-container">
                <AirbnbNavbar />
                <AirbnbHero />

                <section className="airbnb-card-list">
                    { cards }
                </section>
            </div>
        </>
    )
}

export default AirbnbExperiencesPage
