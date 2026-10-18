import nm1 from "./assets/album-covers/1.jpg"
import nm2 from "./assets/album-covers/2.jpg"
import nm3 from "./assets/album-covers/3.jpg"
import nm4 from "./assets/album-covers/4.jpg"
import nm5 from "./assets/album-covers/5.jpg"
import nm6 from "./assets/album-covers/6.jpg"
import nm7 from "./assets/album-covers/7.jpg"
import nm8 from "./assets/album-covers/8.jpg"
import nm9 from "./assets/album-covers/9.jpg"
import nm10 from "./assets/album-covers/10.jpg"

export default function Die({value, hold, isHeld}) {

    const albumCovers = [nm1, nm2, nm3, nm4, nm5, nm6, nm7, nm8, nm9, nm10]

    const style = {
        backgroundColor: "green"
    }

    return (
        <button 
            className="grid-btn" 
            onClick={hold}
            style={isHeld ? style : null}
        >
            <img src={albumCovers[value]} alt={value}/>
        </button>
    )
}