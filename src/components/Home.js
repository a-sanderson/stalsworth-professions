import React from "react"

const Home = props => {
    return(
        <main>
            <section className="homeHero">
                <div className="overlay">
                    <h3>East Tennessee's premiere LVP supplier </h3>
                </div>
                    
                
    
            </section>
            <section className="lvp">
                <p><span>QUALITY  </span><br></br><span>LUXURY  </span><br></br>VINYL  <br></br>PLANK</p>
                <div className="innerLvp">
                    <h4>We Sell and Install Quality Luxury Vinyl at an Affordable Price</h4>
                    <h5>No matter the size of the job, we take care of our customers the same</h5>
                    <p>We typically recommend our customers choose LVP. It is the most durable and affordable flooring on the market! Luxury vinyl plank is 100% waterproof, pet proof, scratch resistant and very quiet! </p>
                    
                </div>
                <h3>We also install the following materials</h3>
            </section>
            <section className="offerings">
                <div style={{marginTop: 15}} className="product one">
                    <h4>Laminate</h4>
                </div>
                <div className="product two">
                    <h4>Tile</h4>
                </div>
                <div className="product three">
                    <h4>Hardwood</h4>
                </div>
                <div className="product four">
                    <h4>Carpet</h4>
                </div>
                <div className="product five">
                    <h4>Linoleum</h4>
                </div>
                <div className="product six">
                    <h4>Stone</h4>
                </div>
            </section>
            <section className="reviews">
                <h3>Testimonials</h3>
                <div className="top"> 
                    <div className="customer one"></div>
                    <div className="textHolder">
                        <p className="reviewText">
                       Floors look awesome, pricing was great and they do what they say they will do! Highly recommend!
                        </p>
                    </div>
                </div>
                <div className="bottom">
                     <div className="textHolder two">
                            <p className="reviewText"> We would reccomend them to everyone. Very pleased with my floor!</p>
                     </div>
                     <div className="customer two"></div>
                </div>
            </section>
            
        </main>
    )
}

export default Home