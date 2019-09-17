import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home.js"
import Nav from "./components/Nav.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Nav/>
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