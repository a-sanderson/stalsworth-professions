import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = props => {
    return(
        <main className="footer">
            <h2><span>Check us Out</span><br></br>Get in Touch</h2>
            <div className="contactContainer">
                <p>(865)201-3888</p>
                <div>
                   <a className="aOne" href="https://www.facebook.com/Stalsworth-Professions-184762355509198/">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                   </a>
                   <a className="aTwo" href="instagram.com">
                   <FontAwesomeIcon icon={faInstagram} size="3x" />
                   </a>
                </div>
                <p>StalsworthProfessions@gmail.com</p>
            </div>
        </main>
    )
}

export default Footer

