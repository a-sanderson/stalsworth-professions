import React, {Component} from "react"

class Contact extends Component {
    constructor(){
        super()
        this.state={
            squareFeet:""
        }
    }
    handleChange= (e) => {
        this.setState({
            squareFeet: e.target.value
        })
    }
    handleClick = e => {
        alert(`You are quoted for $${Math.floor(this.state.squareFeet * 4)} USD`)
    }
    render(){
        return(
            <main className="contactPage">
                <div className="contactHero">
                    <h3>Contact Us</h3>
                </div>
                <section className="contactInner">
                    <h3>Get an instant quote on our LVP below </h3>
                    <p style={{fontStyle: "italic"}}>Quote includes installation costs</p>
                    <form  >
                        <input
                           type="number"
                            name="feet"
                            placeholder="enter square footage"
                            value={this.state.squareFeet}
                            onChange={this.handleChange} />

                        <button onClick={this.handleClick}>Submit</button>

                    </form>
                    <p style={{textAlign: "center"}}>For any questions regarding our other services or upgrades please call (865)-201-3888 or send an email to stalsworthprofessions@gmail.com today!</p> 
                </section>
             </main>

        )
    }
}

export default Contact