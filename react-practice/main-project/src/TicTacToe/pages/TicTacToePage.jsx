import { useState } from 'react';

import '../css/TicTacToe.css'
import GameLogo from '../assets/images/game-logo.png'

import TicTacToeBoard from '../components/TicTacToeBoard'
import TicTacToePlayer from "../components/TicTacToePlayer"


const TicTacToePage = function() {
    const [activePlayer, setActivePlayer] = useState('X')

    const handleSelectSquare = function() {
        setActivePlayer(prevActivePlayer => prevActivePlayer === 'X' ? 'O' : 'X')
    }

    return (
        <>
            <div id="tictactoe-container">
                <header>
                    <div className="header-content">
                        <img src={GameLogo} alt="Hand-drawn tictactoe game board" />
                        <h1>React Tic-Tac-Toe</h1>
                    </div>
                </header>

                <div id="game-container">
                    <ol id="players" className="highlight-player">
                        <TicTacToePlayer initialName="Player 1" symbol="X" isActive={ activePlayer === 'X' } />
                        <TicTacToePlayer initialName="Player 2" symbol="O" isActive={ activePlayer === 'O' } />
                    </ol>

                    <TicTacToeBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
                </div>
            </div>
        </>
    )
}

export default TicTacToePage

