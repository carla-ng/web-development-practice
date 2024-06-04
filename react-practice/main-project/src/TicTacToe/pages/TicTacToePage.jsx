import '../css/TicTacToe.css'
import GameLogo from '../assets/images/game-logo.png'

import TicTacToePlayer from "../components/TicTacToePlayer"


const TicTacToePage = function() {
    return (
        <>
            <div id="tictactoe-container">
                <header>
                    <img src={GameLogo} alt="Hand-drawn tictactoe game board" />
                    <h1>React Tic-Tac-Toe</h1>
                </header>

                <div id="game-container">
                    <ol id="players">
                        <TicTacToePlayer initialName="Player 1" symbol="X" />
                        <TicTacToePlayer initialName="Player 2" symbol="O" />
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TicTacToePage

