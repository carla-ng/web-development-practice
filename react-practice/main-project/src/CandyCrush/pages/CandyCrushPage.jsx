import '../css/CandyCrush.css'

import CandyCrushPopup from '../components/CandyCrushPopup'
import CandyCrushScore from '../components/CandyCrushScore'

import blueCandy from '../assets/images/blue-candy.png'
import greenCandy from '../assets/images/green-candy.png'
import orangeCandy from '../assets/images/orange-candy.png'
import purpleCandy from '../assets/images/purple-candy.png'
import redCandy from '../assets/images/red-candy.png'
import yellowCandy from '../assets/images/yellow-candy.png'
import blank from '../assets/images/blank.png'

import { useCallback, useEffect, useState } from 'react'


const WIDTH = 8
const CANDY_COLORS = [
    blueCandy,
    greenCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
]


const CandyCrushPage = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    const [squareBeingDragged, setSquareBeingDragged] = useState(null)
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(0)


    /* Popup */
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const isDeviceSupported = useCallback(() => {
        const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints) && windowWidth <= 768
        const isSupportedScreenSize = window.matchMedia('(min-width: 769px)').matches
    
        const isSupported = !isTouchDevice && isSupportedScreenSize

        !isSupported ? setIsPopupOpen(true) : setIsPopupOpen(false)
    }, [windowWidth])

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth)
        isDeviceSupported()
    }, [isDeviceSupported])


    /* Creates game board */
    const createBoard = () => {
        const randomColorArrangement = []
        
        for ( let i = 0; i < WIDTH * WIDTH; i++ ) {
            const randomNumber = Math.floor(Math.random() * CANDY_COLORS.length )  //random number from 0 to 5
            const randomColor = CANDY_COLORS[randomNumber]
            
            randomColorArrangement.push(randomColor)
        }

        setCurrentColorArrangement(randomColorArrangement)        
    }



    /* Checks matches: columns of 3 and 4, rows of 3 and 4 */

    const checkForColumnOfFour = useCallback(() => {
        for ( let i = 0; i <= 39; i++ ) {
            const columnOfFour = [i, i + WIDTH, i + WIDTH * 2, i + WIDTH * 3]
            const chosenColor = currentColorArrangement[i]
            const isBlank = ( currentColorArrangement[i] === blank )

            if ( columnOfFour.every( number => currentColorArrangement[number] === chosenColor ) && !isBlank ) {
                setScoreDisplay( prevScore => parseInt(prevScore) + 4 )
                columnOfFour.forEach( number => currentColorArrangement[number] = blank )
                return true
            }
        }
    }, [currentColorArrangement])

    const checkForRowOfFour = useCallback(() => {
        for ( let i = 0; i < 64; i++ ) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const chosenColor = currentColorArrangement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 61, 62, 63]
            const isBlank = ( currentColorArrangement[i] === blank )

            if ( notValid.includes(i) ) continue

            if ( rowOfFour.every( number => currentColorArrangement[number] === chosenColor ) && !isBlank ) {
                setScoreDisplay(prevScore => parseInt(prevScore) + 4)
                rowOfFour.forEach( number => currentColorArrangement[number] = blank )
                return true
            }
        }
    }, [currentColorArrangement])

    const checkForColumnOfThree = useCallback(() => {
        for ( let i = 0; i <= 47; i++ ) {
            const columnOfThree = [i, i + WIDTH, i + WIDTH * 2]
            const chosenColor = currentColorArrangement[i]
            const isBlank = ( currentColorArrangement[i] === blank )

            if ( columnOfThree.every( number => currentColorArrangement[number] === chosenColor ) && !isBlank ) {
                setScoreDisplay(prevScore => parseInt(prevScore) + 3)
                columnOfThree.forEach( number => currentColorArrangement[number] = blank )
                return true
            }
        }
    }, [currentColorArrangement])

    const checkForRowOfThree = useCallback(() => {
        for ( let i = 0; i < 64; i++ ) {
            const rowOfThree = [i, i + 1, i + 2]
            const chosenColor = currentColorArrangement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
            const isBlank = ( currentColorArrangement[i] === blank )

            if ( notValid.includes(i) ) continue

            if ( rowOfThree.every( number => currentColorArrangement[number] === chosenColor ) && !isBlank ) {
                setScoreDisplay(prevScore => parseInt(prevScore) + 3)
                rowOfThree.forEach( number => currentColorArrangement[number] = blank )
                return true
            }
        }
    }, [currentColorArrangement])


    /* Move pieces */
    const moveIntoSquareBelow = useCallback(() => {
        for ( let i = 0; i <= 55; i++ ) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if ( isFirstRow && currentColorArrangement[i] === blank ) {
                let randomNumber = Math.floor(Math.random() * CANDY_COLORS.length)
                currentColorArrangement[i] = CANDY_COLORS[randomNumber]
            }

            if ( (currentColorArrangement[i + WIDTH]) === blank ) {
                currentColorArrangement[i + WIDTH] = currentColorArrangement[i]
                currentColorArrangement[i] = blank
            }
        }
    }, [currentColorArrangement])



    /* Drag and Drop */

    const dragStart = (e) => {
        setSquareBeingDragged(e.target)
    }

    const dragDrop = (e) => {
        setSquareBeingReplaced(e.target)
    }

    const dragEnd = () => {
        const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
        const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

        const validMoves = [
            squareBeingDraggedId + 1,
            squareBeingDraggedId + WIDTH,
            squareBeingDraggedId - 1,
            squareBeingDraggedId + WIDTH,
        ]

        const validMove = validMoves.includes(squareBeingReplacedId)

        if ( validMove ) {
            currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
            currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

            const isColumnOfFour = checkForColumnOfFour()
            const isRowOfFour = checkForRowOfFour()
            const isColumnOfThree = checkForColumnOfThree()
            const isRowOfThree = checkForRowOfThree()

            if ( squareBeingReplacedId
                && ( isColumnOfFour || isRowOfFour || isColumnOfThree || isRowOfThree )
                ) {
                    setSquareBeingDragged(null)
                    setSquareBeingReplaced(null)
            } else {
                currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
                currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
                setCurrentColorArrangement([...currentColorArrangement])
            }
        }
            
    }



    / * useEffect Hook */

    useEffect(() => {
        createBoard()
        isDeviceSupported()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowWidth, handleResize])

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour()

            checkForColumnOfThree()
            checkForRowOfThree()

            moveIntoSquareBelow()

            setCurrentColorArrangement([...currentColorArrangement])
        }, 100)
        return () => clearInterval(timer)

    }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])



    return (
        <main className="candycrush-container">
            <CandyCrushPopup isOpen={isPopupOpen} />

            <CandyCrushScore score={scoreDisplay} />

            <div className="game-container">
                <div className="game">
                    { currentColorArrangement.map((candyColor, index) => (
                        <img
                            key={index}
                            src={candyColor}
                            alt={candyColor}
                            data-id={index}
                            draggable={true}
                            onDragStart={dragStart}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => e.preventDefault()}
                            onDragLeave={(e) => e.preventDefault()}
                            onDrop={dragDrop}
                            onDragEnd={dragEnd}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default CandyCrushPage