import React from "react"
import {Link} from "react-router-dom"

const Nav = props => {
    return(
        <section className="nav">
            <div className="logoContainer">

            </div>
            <p>(865)201-2888</p>
            <div className="navLinks">
                <Link to={{pathname: "/"}}>Home</Link>
                <Link to={{pathname: "/about"}}>About</Link>
                <Link to={{pathname: "/contact"}}>Contact</Link>
            </div>
        </section>
    )
}
export default Nav