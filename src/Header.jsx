import logo from "./assets/nmt-logo.png"

export default function Header({back}) {
    return(
        <header>
            {back && <button onClick={back}>{"<- Players"}</button>}
            <div className="center">
                <img src={logo} alt="Logo"/>
                <span>NuMetal Tenzies</span>
            </div>
        </header>
    )
}