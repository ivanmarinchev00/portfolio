import React from 'react'
import "./contact.css"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contactLeft">
            <img src="assets/shake.svg" alt="" className="shake" />
            </div>
            <div className="contactRight">
            <h2>Contact.</h2>
            <form >
                <input type="text" placeholder="email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}
