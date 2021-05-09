import "./navbar.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">iMarinchev</a>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" onClick={() => window.open('https://github.com/ivanmarinchev00')}/>
                    </div>
                    <div className="itemContainer">
                        <LinkedInIcon className="icon" onClick={() => window.open('https://www.linkedin.com/in/ivan-marinchev-b88483194/')}/>
                    </div>
                    <div className="itemContainer">
                        <MailIcon/>
                        <span>ivanmarinchev00@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
