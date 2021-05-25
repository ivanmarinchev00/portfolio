import "./intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: false,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Frontend Developer", "Full-Stack Engineer"],
      });
    }, []);

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
                    <span ref={textRef}></span>
                </div>
                <a href="#portfolio" className="arrowContainer"> 
                    <img src="assets/down.png" alt="" className="arrow"/>
                </a>
            </div>
        </div>
    )
}
