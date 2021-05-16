import "./works.css"
import { useState, useEffect } from 'react';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentLogo, setCurrentLogo] = useState("");
    let logoSrc = "";

    const data = [
        {
          id: "1",
          logo: "../assets/reconart-social-logo.png",
          title: "ReconArt",
          role: "Role: Frontend Developer Intern",
          class: "reconart",
          period: "03.2021-08.2021",
          desc:
            "Skills and Technologies: \n ES6, Ext Js, CSS Sprites, Code Quality and Performance, HTML, CSS",
        },
        {
          id: "2",
          logo: "../assets/fontys-logo.png",
          title: "Fontys University of Applied Sciences",
          role:"Role: Student",
          class: "fontys",
          period: "08.2019-06.2023",
          desc:
            "Skills and Technologies: \n C#, PHP (Laravel), JavaScript (ES6), HTML, CSS, React Js, Swift UI, PWA, Kotlin, MySQL, Apache, GIT, Jira",
        },
        {
          id: "3",
          logo: "../assets/coming-soon.png",
          title: "Your company?",
          class: "tba",
          period: "09.2021-02.2022",
          desc:
            "TBA",
        },
      ];

      useEffect(()=> {
            if (currentSlide === 1) setCurrentLogo("../assets/fontys-logo.png")
            else if (currentSlide === 0) setCurrentLogo("../assets/reconart-social-logo.png");
            else if (currentSlide === 2) setCurrentLogo("../assets/coming-soon.png");
      }, [currentSlide])


      const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    

    return (
        <div className="works" id="works">
           <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
               {data.map((d) => (
                   <div className="slider-container" key={d.id}>
                   <div className="slider-item" >
                       <div className="slider-left" >
                           <img className={d.class} alt="logo" src={d.logo}/>
                       </div>
                       <div className="slider-right">
                           <h2>{d.title}</h2>
                           <h3>{d.role}</h3>
                            <h4>{d.period}</h4>
                            <p className="new-line">{d.desc}
                            </p>
                       </div>
                   </div>
               </div>
               ))}
           </div>
           <img src="../assets/arrow.png" className="arrow-slider left" onClick={() => handleClick("left")} alt="left-arrow"/>
           <img src="../assets/arrow.png" className="arrow-slider right"  onClick={() => handleClick()} alt="right-arrow"/>
        </div>
    )
}
