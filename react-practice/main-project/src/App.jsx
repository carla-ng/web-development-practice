// import AirbnbCard from './components/AirbnbCard'
// import AirbnbHero from './components/AirbnbHero'
// import AirbnbNavbar from './components/AirbnbNavbar'
// import data from './assets/data/airbnb/data';

import MemeGeneratorHeader from './components/MemeGeneratorHeader'
import MemeGenerator from './components/MemeGenerator'

import './App.css'

function App() {

    // const cards = data.map(( data ) => {
    //     return (
    //         <AirbnbCard
    //             key={data.id}
    //             {...data}
    //         />
    //     )
    // })

    return (
        <>

            <div id="memegenerator-container">
                <MemeGeneratorHeader />
                <MemeGenerator />
            </div>


            {/* <div id="airbnb-container">
                <AirbnbNavbar />
                <AirbnbHero />

                <section className="airbnb-card-list">
                    { cards }
                </section>
            </div> */}
        </>
    )
}

export default App
