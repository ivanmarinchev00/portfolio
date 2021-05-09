import "./intro.css"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="introLeft">
                <div className="imgContainer">
                    <img src="assets/174608681_910871466416779_1360797091771506156_n.jpg"></img>
                </div>
            </div>
            <div className="introRight">
                <div className="introWrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ivan Marinchev</h1>
                    <h3>Frontend Developer</h3>
                </div>
                <a href="#portfolio" className="arrowContainer"> 
                    <img src="assets/down.png" alt="" className="arrow"/>
                </a>
            </div>
        </div>
    )
}
