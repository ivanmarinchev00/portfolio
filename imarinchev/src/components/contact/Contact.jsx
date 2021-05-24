import { useState } from "react";
import "./contact.css"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="contactLeft">
            <img src="assets/shake.svg" alt="" className="shake" />
            </div>
            <div className="contactRight">
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I'll reply as soon as possible!</span>}
            </form>
            </div>
        </div>
    )
}
