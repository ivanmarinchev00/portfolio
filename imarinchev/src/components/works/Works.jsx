import "./works.css"

export default function Works() {
    return (
        <div className="works" id="works">
           <div className="slider">
               <div className="slider-container">
                   <div className="slider-item">
                       <div className="slider-left">
                           <img className="reconart" src="../assets/reconart-social-logo.png"/>
                       </div>
                       <div className="slider-right">
                           <h2>ReconArt</h2>
                           <h3>Frontend Developer Intern</h3>
                            <h4>03.2021-08.2021</h4>
                       </div>
                   </div>
               </div>
           </div>
           <img src="../assets/arrow.png" className="arrow-slider left"/>
           <img src="../assets/arrow.png" className="arrow-slider right"/>
        </div>
    )
}
