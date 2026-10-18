import { useState } from "react"
import Header from "./Header"
import Game from "./Game"

export default function Main({setState, players}) {

    // back function could be implemented in later commits 
    // function back() {
    //     setState(0)
    // }

    const [elapsed, setElapsed] = useState(0)
    const [ready, setReady] = useState(0)
    const [index, setIndex] = useState(0)

    function handleReady() {
        setReady(1)
    }

    function handleNext() {
        players[index].time = Math.floor(elapsed)
        setElapsed(0)
        setReady(0)
        if(index === players.length - 1) setState(2)
        else setIndex(prev => prev + 1)
    }

    return(
        <>
            <Header 
                //back={back}
            />
            <main className="center">
                {ready === 0 && 
                    <div className="column-center">
                        <h1>{players[index].name} are you ready?</h1>
                        <button className="start-btn" onClick={handleReady}>Ready</button>
                    </div>
                    }
                {ready === 1 && <Game 
                    setReady={setReady}
                    elapsed={elapsed}
                    setElapsed={setElapsed}
                />}
                {ready === 2 && 
                    <div className="column-center">
                        <h1>{players[index].name} time is: {Math.floor(elapsed)}</h1>
                        <button className="start-btn" onClick={handleNext}>Next</button>
                    </div>
                }
            </main>
        </>
    )
}