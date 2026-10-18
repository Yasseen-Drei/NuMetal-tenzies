import { useState } from 'react'
import { nanoid } from 'nanoid'
import Player from './Player'
import Header from './Header'
import plusSign from "./assets/plus-sign.png"

export default function Players({players, setPlayers, setState}) {

    const [warning, setWarning] = useState(false)

    function addPlayer(formDate) {
        const newPlayer = formDate.get("player")
        setWarning(false)
        setPlayers(prev => [...prev, {
            name : newPlayer,
            time : 0,
            id : nanoid()
        }])
    }

    function removePlayer(id){
        setPlayers(prev => prev.filter(player => player.id !== id))
    }

    function startGame() {
        if(players.length > 0) setState(1)
        else setWarning(true)
    }

    const playersEl = players.map(player => <Player 
        key={player.id} 
        name={player.name} 
        removePlayer={() => removePlayer(player.id)}
    />)

    return (
        <>
            <Header />
            <section className="players-section">
                <h1>Add Players</h1>

                <form action={addPlayer}>
                    <label>New Player <br></br>
                        <input type="text" name="player" placeholder="e.g. Yasseen"></input>
                    </label>
                    <button>
                        <img src={plusSign} alt="Add"/>
                    </button>
                </form>

                {warning && <p className='warning'>* Add atleast one player to start the game</p>}

                <ul className="player-list">
                    {playersEl}
                </ul>

                <div className='center'>
                    <button className='start-btn' onClick={startGame}>Start Game</button>
                </div>
            </section>
        </>
    )
}