import hero from './../assets/images/airbnb_hero.png';

function AirbnbHero() {
    return (
        <section className="airbnb-hero">
            <img src={hero} />
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default AirbnbHero;