import { Link } from 'react-router-dom';

import './../App.css'

function Home() {
    return (
        <div style={{ margin: '1rem'}}>
            <h1>Menu</h1>
            <br />

            <Link to="airbnbexperiences">Airbnb Experiences Page Clone</Link>
            <br /><br />
            <Link to="memegenerator">Meme Generator</Link>
        </div>
    )
}

export default Home
