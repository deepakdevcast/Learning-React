import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Message to Readers"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click to see</button>
            </div>
        );
    }
}

export default Message