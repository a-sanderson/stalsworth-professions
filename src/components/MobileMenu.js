import React from "react"
import {Link} from "react-router-dom"
import {faTimes,} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"


const MobileMenu = props => {
    return(
        <section className= {props.className}>
            <FontAwesomeIcon style={{position: "absolute", right: 5, top: 5, color: "#2b7A7A"}}onClick={props.handleClick} icon={faTimes} size="3x" />
            <div className="logoContainer">
            </div>
            <Link to={{pathname: "/"}}>Home</Link>
            <Link to={{pathname: "/about"}}>About</Link>
            <Link to={{pathname: "/contact"}}>Contact</Link>
            <p>(865)201-3888</p>
            <p>stalsworthprofessions@gmail.com</p>
            <div style={{display: "flex", alignItems: "center"}}>
                <p style={{marginRight: 15, fontSize: "1.4em"}}>follow us</p> <a href="https://www.facebook.com/Stalsworth-Professions-184762355509198/"><FontAwesomeIcon style={{marginLeft: 15}} icon={faFacebook} size="3x" /></a>
            </div>
        </section>
    )
}
export default MobileMenu