
import { useState } from 'react';


// Calculates the winner of the game
function calculateWinner( squares ) {
    const possibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for ( let i = 0; i < possibilities.length; i++ ) {
        const [a, b, c] = possibilities[i];

        if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
            return squares[a];
        }
    }

    return null;
}


// Squares of the board
function Square({ value, onSquareClick }) {
    return <button className="square" onClick={ onSquareClick }> { value } </button>;
}


// Tic-tac-toe board with nine Squares
function Board({ xIsNext, squares, onPlay, currentMove }) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));


    // Adds X or O to Square
    function handleClick( i ) {

        // Checks if Square is empty or if there is a already winner
        if ( squares[i] || calculateWinner(squares) ) {
            return;
        }

        const nextSquares = squares.slice();

        nextSquares[i] = ( xIsNext ) ? "X" : "O";

        onPlay(nextSquares);
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
    }


    // Calculates winner
    const winner = calculateWinner(squares);
    let status;
    if ( winner ) {
        status = "The winner is: " + winner;
    } else if ( !winner && currentMove === 9 ) {
        status = "It's a draw!"
    } else {
        status = "Current player: " + ( xIsNext ? "X" : "O" );
    }
      

    return (
        <>
            <div className="status">{ status }</div>

            <div className="board-row">
                <Square value={ squares[0] } onSquareClick={ () => handleClick(0) } />
                <Square value={ squares[1] } onSquareClick={ () => handleClick(1) } />
                <Square value={ squares[2] } onSquareClick={ () => handleClick(2) } />
            </div>
            <div className="board-row">
                <Square value={ squares[3] } onSquareClick={ () => handleClick(3) } />
                <Square value={ squares[4] } onSquareClick={ () => handleClick(4) } />
                <Square value={ squares[5] } onSquareClick={ () => handleClick(5) } />
            </div>
            <div className="board-row">
                <Square value={ squares[6] } onSquareClick={ () => handleClick(6) } />
                <Square value={ squares[7] } onSquareClick={ () => handleClick(7) } />
                <Square value={ squares[8] } onSquareClick={ () => handleClick(8) } />
            </div>
        </>
    );
}


// Game history and info
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    // Sets game state/history
    function handlePlay( nextSquares ) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }


    // Jump to desired history move
    function jumpTo( nextMove ) {
        setCurrentMove(nextMove);
    }


    // Creates game history buttons
    const moves = history.map(( squares, move ) => {
        let description;

        if ( move > 0 ) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li key={ move }>
                <button onClick={() => jumpTo( move )}>{ description }</button>
            </li>
        );
    });


    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handlePlay } currentMove={ currentMove }  />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

