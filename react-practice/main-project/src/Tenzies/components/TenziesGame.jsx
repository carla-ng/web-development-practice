import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

import TenziesDie from './TenziesDie';


function TenziesGame() {
    const [dice, setDice] = useState( getDiceNumbers() )
    const [tenzies, setTenzies] = useState(false)  // true: user has won


    // Generate new die element
    function generateNewDie() {
        // Math.floor(Math.random() * (max - min + 1)) + min
        return {
            value: Math.ceil(Math.random() * 6),
            isFrozen: false,
            id: nanoid()
        }
    }


    // Generate the random numbers for the ten dice (numbers from 1 to 6)
    function getDiceNumbers() {
        let diceNumbers = []

        for ( let i = 0; i < 10; i++ ) {
            diceNumbers.push( generateNewDie() )
        }

        return diceNumbers
    }


    // Roll dice (get new dice numbers)
    function rollDice() {
        if ( tenzies ) {
            restartGame()
        } else {
            setDice(prevDice => prevDice.map(die => {
                return ( die.isFrozen === false ) ? generateNewDie() : die
            }))
        }
    }


    // Freeze die
    function freezeDie( id ) {
        setDice(prevDice => prevDice.map(die => {
            return ( die.id === id ) ? {...die, isFrozen: !die.isFrozen} : die
        }))
    }


    // Restart game
    function restartGame() {
        setDice( getDiceNumbers() )
        setTenzies( false )
    }


    // Create a TenziesDie component for every number from 'dice'
    const diceComponents = dice.map(die => {
        return <TenziesDie key={die.id} value={die.value} isFrozen={die.isFrozen} freezeDie={() => freezeDie(die.id)} />
    })


    // Check if user has won
    useEffect(() => {
        const allFrozen = dice.every(die => die.isFrozen)

        const firstDieValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstDieValue)

        if ( allFrozen && allSameValue) {
            setTenzies(true)
        }

    }, [dice])


    return (
        <main className="tenzies-game">

            { tenzies && <Confetti /> }

            <div className="tenzies-box">

                <h1 className="tenzies-title">Tenzies</h1>
                <p className="tenzies-instructions">Roll the dice until they&apos;re all the same! Click each die to freeze it at its current value between rolls.</p>

                <div className="tenzies-dice">
                    { diceComponents }
                </div>
                <button className="tenzies-button" onClick={rollDice}>{ tenzies ? "Play Again" : "Roll" }</button>
            </div>
            
        </main>
    )
}

export default TenziesGame

