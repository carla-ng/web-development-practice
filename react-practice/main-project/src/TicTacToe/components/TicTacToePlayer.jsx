import { useState } from "react"

const TicTacToePlayer = function({ initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    const handleEditing = function() {
        setIsEditing(editing => !editing)
    }

    const handleChange = function( event ) {
        setPlayerName(event.target.value)
    }

    let playerNameContainer = <span className="player-name">{ playerName }</span>
    if ( isEditing ) {
        playerNameContainer = <input type="text" required value={ playerName } onChange={ handleChange } />
    }

    return (
        <li className={ isActive ? 'active' : undefined }>
            <span className="player">
                { playerNameContainer }
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={ handleEditing }>{ isEditing ? 'Save' : 'Edit' }</button>
        </li>
    )
}

export default TicTacToePlayer