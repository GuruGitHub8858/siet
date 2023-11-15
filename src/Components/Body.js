import React, { Component } from "react";
import Image from '../Image/download.jpeg'
import './body.css'
class Body extends Component {
    constructor() {    // creating initial state
        super();
        this.state = { count: 0 }  // intial state
        // it is in form of  obj key value pair
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
        // changing my intial state
    }

    render() {
        return (
            <div className='center-div '>
                <div >
                    <img src={Image} alt="it is a img" />
                    <p> An image is a visual representation of something. An image can be a two-dimensional (2D) representation, such as a drawing, painting, or photograph, or a three-dimensional (3D) object, such as a carving or sculpture.</p>
                </div>
                <p>{this.state.count}</p>
                <button onClick={this.increment} className="like-button">like</button>
            </div>
        )
    }
}
export default Body