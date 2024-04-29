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
    }


    const checkForColumnOfFour = () => {
        for ( let i = 0; i < 39; i++ ) {
            const columnOfFour = [i, i + WIDTH, i + WIDTH * 2, i + WIDTH * 3]
            const chosenColor = currentColorArrangement[i]

            if ( columnOfFour.every( number => currentColorArrangement[number] === chosenColor ) ) {
                columnOfFour.forEach( number => currentColorArrangement[number] = '' )
            }
        }
    }


    const checkForColumnOfThree = () => {
        for ( let i = 0; i < 47; i++ ) {
            const columnOfThree = [i, i + WIDTH, i + WIDTH * 2]
            const chosenColor = currentColorArrangement[i]

            if ( columnOfThree.every( number => currentColorArrangement[number] === chosenColor ) ) {
                columnOfThree.forEach( number => currentColorArrangement[number] = '' )
            }
        }
    }


    const checkForRowOfFour = () => {
        for ( let i = 0; i < 64; i++ ) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const chosenColor = currentColorArrangement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 61, 62, 63]

            if ( notValid.includes(i) ) continue

            if ( rowOfFour.every( number => currentColorArrangement[number] === chosenColor ) ) {
                rowOfFour.forEach( number => currentColorArrangement[number] = '' )
            }
        }
    }


    const checkForRowOfThree = () => {
        for ( let i = 0; i < 64; i++ ) {
            const rowOfThree = [i, i + 1, i + 2]
            const chosenColor = currentColorArrangement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if ( notValid.includes(i) ) continue

            if ( rowOfThree.every( number => currentColorArrangement[number] === chosenColor ) ) {
                rowOfThree.forEach( number => currentColorArrangement[number] = '' )
            }
        }
    }

    
    useEffect(() => {
        createBoard()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour()
            checkForColumnOfThree()
            checkForRowOfThree()

            setCurrentColorArrangement([...currentColorArrangement])
        }, 100)
        return () => clearInterval(timer)

    }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, currentColorArrangement])

    console.log(currentColorArrangement)

    return (
        <main className="candycrush-container">
            <div className="game">
                { currentColorArrangement.map((candyColor, index) => (
                    <img
                        key={index}
                        style={{backgroundColor: candyColor}}
                        alt={index}
                    />
                ))};
            </div>
        </main>
    )
}

export default CandyCrushPage