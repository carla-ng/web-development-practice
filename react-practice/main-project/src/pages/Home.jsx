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
            <br /><br />
            <Link to="tenzies">Tenzies Game</Link>
            <br /><br />
            <Link to="foodielandingpage">Foodie Landing Page</Link>
            <br /><br />
            <Link to="candycrush">Candy Crush</Link>
            <br /><br />
            <Link to="reactessentials">React Essentials</Link>
            <br /><br />
            <Link to="tictactoe">Tic-Tac-Toe</Link>
        </div>
    )
}

export default Home
