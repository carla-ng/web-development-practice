import '../css/CandyCrush.css'

import { useEffect, useState } from 'react'


const WIDTH = 8
const CANDY_COLORS = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow',
]


const CandyCrushPage = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])


    const createBoard = () => {
        const randomColorArrangement = []
        
        for ( let i = 0; i < WIDTH * WIDTH; i++ ) {
            const randomNumber = Math.floor(Math.random() * CANDY_COLORS.length )  //random number from 0 to 5
            const randomColor = CANDY_COLORS[randomNumber]
            
            randomColorArrangement.push(randomColor)
        }

        setCurrentColorArrangement(randomColorArrangement)
        console.log(currentColorArrangement)
    }

    
    useEffect(() => {
        createBoard()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <main className="candycrush-container">
            <div className="game">
                { currentColorArrangement.map((candyColor, index) => (
                    <img
                        key={index}
                        style={{backgroundColor: candyColor}}
                        alt={candyColor}
                    />
                ))};
            </div>
        </main>
    )
}

export default CandyCrushPage