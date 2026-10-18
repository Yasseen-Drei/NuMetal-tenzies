import garbageIcon from "./assets/garbage-icon.png"

export default function Player({name, removePlayer}){
    return (
        <li className="player">
            {name}
            <button onClick={removePlayer}>
                <img src={garbageIcon} alt="delete"/>
            </button>
        </li>
    )
}