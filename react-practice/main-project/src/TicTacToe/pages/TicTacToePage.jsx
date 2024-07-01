import { useState } from 'react';

import '../css/TicTacToe.css'
import { WINNING_COMBINATIONS } from '../assets/data/winning-combinations.js'
import GameLogo from '../assets/images/game-logo.png'

import TicTacToeBoard from '../components/TicTacToeBoard'
import TicTacToeGameOver from '../components/TicTacToeGameOver'
import TicTacToeLog from '../components/TicTacToeLog'
import TicTacToePlayer from "../components/TicTacToePlayer"


const PLAYERS = {
    X : 'Player 1',
    O : 'Player 2',
}

const INITIAL_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


const deriveActivePlayer = function( gameTurns ) {
    let currentPlayer = 'X'

    if ( gameTurns.length > 0 && gameTurns[0].player === 'X' ) {
        currentPlayer = 'O'
    }

    return currentPlayer
}


const deriveBoard = function( gameTurns ) {
    let board = [...INITIAL_BOARD.map(array => [...array])]

    for ( const turn of gameTurns ) {
        const { square, player } = turn
        const { row, col } = square

        board[row][col] = player
    }

    return board
}


const deriveWinner = function( board, players ) {
    let winner

    for ( const combination of WINNING_COMBINATIONS ) {
        const firstSquareSymbol = board[combination[0].row][combination[0].column]
        const secondSquareSymbol = board[combination[1].row][combination[1].column]
        const thirdSquareSymbol = board[combination[2].row][combination[2].column]

        if ( firstSquareSymbol &&
            firstSquareSymbol == secondSquareSymbol &&
            firstSquareSymbol == thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol]
        }
    }

    return winner
}


const TicTacToePage = function() {
    const [players, setPlayers] = useState(PLAYERS)
    const [gameTurns, setGameTurns] = useState([])

    const activePlayer = deriveActivePlayer(gameTurns)
    const board = deriveBoard(gameTurns)
    const winner = deriveWinner(board, players)
    const itsADraw = gameTurns.length === 9 && !winner

    const handleSelectSquare = function( rowIndex, colIndex ) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns)
            
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurns
            ]

            return updatedTurns
        })
    }

    const handleRestart = function() {
        setGameTurns([])
    }

    const handlePlayerNameChange = function( symbol, newName ) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
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
                        <TicTacToePlayer
                            initialName={PLAYERS.X}
                            symbol="X"
                            isActive={ activePlayer === 'X' }
                            onChangeName={handlePlayerNameChange}
                        />
                        <TicTacToePlayer
                            initialName={PLAYERS.O}
                            symbol="O"
                            isActive={ activePlayer === 'O' }
                            onChangeName={handlePlayerNameChange}
                        />
                    </ol>

                    { ( winner || itsADraw ) && <TicTacToeGameOver winner={winner} onRestart={handleRestart} /> }
                    <TicTacToeBoard
                        onSelectSquare={handleSelectSquare}
                        board={board}
                    />
                </div>

                <TicTacToeLog turns={gameTurns} />
            </div>
        </>
    )
}

export default TicTacToePage

