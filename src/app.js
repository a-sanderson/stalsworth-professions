import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home.js"
import Nav from "./components/Nav.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"
import MobileMenu from "./components/MobileMenu.js"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open: false
        }
        
    }
    handleClick = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){
        return(
            <>
            <Nav handleClick={this.handleClick}/>
            <MobileMenu handleClick={this.handleClick} className= {!this.state.open? "mobileMenu" : "menuClosed"}></MobileMenu> />
            <Switch>
                <Route exact path="/" render= { routerProps => <Home/> } />
                <Route path="/about" render= { routerProps => <About/> } />
                <Route path="/contact" render= { routerProps => <Contact/> } />
            </Switch>
            <Footer/>
            </>
            
        )
    }
}
export default App