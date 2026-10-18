import { nanoid } from "nanoid"
import { useState, useEffect, useRef } from "react"
import Die from "./Die"

export default function Game({setReady, elapsed, setElapsed}) {
    const [running, setRunning] = useState(true)
    const startRef = useRef(null)

    const [dice, setDice] = useState(() => generateAll())
    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if(gameWon) {
            console.log("done")
            setRunning(false)
            setReady(2)
        }
    }, [gameWon])

    function generateAll(){
        let newDice = []
        for(let i = 0; i < 10; i++){
            newDice[i] = {
                id: nanoid(),
                value: Math.floor(Math.random() * 10),
                isHeld: false
            }
        }
        return newDice
    }

    function hold(id){
        setDice(prev => prev.map(die => (
            die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
        )))
    }

    function roll() {
        setDice(prev => prev.map(die => (
            die.isHeld ? die : {
                ...die,
                value: Math.floor(Math.random() * 10)
            }
        )))
    }

    useEffect(() => {
        if (!running) return

        startRef.current = performance.now()
        let frameId

        const tick = (now) => {
        setElapsed(now - startRef.current)
        frameId = requestAnimationFrame(tick)
        }

        frameId = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(frameId)
    }, [running])

    const diceEl = dice.map(die =>(
        <Die 
            key={die.id}
            value={die.value}
            hold={() => hold(die.id)}
            isHeld={die.isHeld}
        />
    ))

    return (
        <section className="game">

            <div className="timer">
                <h1>Time: {Math.floor(elapsed)} ms</h1>
            </div>

            <div className="dice-grid">
                {diceEl}
            </div>

            <button className="start-btn" onClick={roll}>Roll</button>
        </section>
    )
}