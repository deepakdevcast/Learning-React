import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    changeCount() {
        this.setState(preState => ({
            count: preState.count + 1

        }), () => {
            console.log("Callback: ", this.state.count)
        })
    }
    changeCountfive(){
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
    }
    render() {
        return (
            <div>
                <p>count - {this.state.count}</p>
                <button onClick={() => this.changeCountfive()}>increment</button>
            </div>
        )
    }
}
