import { useState } from "react"
import Players from "./Players";
import Main from "./Main";
import Resaults from "./Results";

function App() {
  const [players, setPlayers] = useState([])
  const [state, setState] = useState(0)

  function playAgain(){
    setState(0)
  }

  return (
    <>
      {state === 0 && <Players 
        players={players}
        setPlayers={setPlayers}
        setState={setState}
      />}
      {state === 1 && <Main 
        setState={setState}
        players={players}
      />}
      {state === 2 && <Resaults 
        players={players}
        playAgain={playAgain}
      />}
    </>
  )
}

export default App
