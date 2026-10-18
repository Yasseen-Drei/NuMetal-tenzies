import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import Header from "./Header"

export default function Resaults({players, playAgain}) {
    const { width, height } = useWindowSize()
    players.sort((a, b) => a.time - b.time)

    const leaderboardEl = players.map((player, index) => {
        if(index === 0) return <li className='first-pos'><span className='rainbow-text'>{player.name} : {player.time} </span></li>
        else return <li className="player-pos">{player.name} : {player.time}</li>
    })
    
    return(
        <>
            <Confetti width={width} height={height}/>
            <Header />
            <section className="column-center">
                <ul className="leaderboard-list">
                    {leaderboardEl}
                </ul>
                <button className='start-btn' onClick={playAgain}>Play Again</button>
            </section>
        </>
    )
}