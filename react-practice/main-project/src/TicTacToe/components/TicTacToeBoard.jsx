
const TicTacToeBoard = function({ onSelectSquare, board }) {
    /*
    const [board, setBoard] = useState(initialBoard)

    const handleSelectSquare = function(rowIndex, colIndex) {
        setBoard(prevBoard => {
            const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedBoard
        })

        onSelectSquare()
    }
    */

    return <ol id="game-board">
        { board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
            { row.map((playerSymbol, colIndex) => <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{ playerSymbol }</button>
            </li> )}
            </ol>
        </li> )}
    </ol>
}

export default TicTacToeBoard