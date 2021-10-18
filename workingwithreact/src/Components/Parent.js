import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            howis: "Parent",
            name: "Readers"
        }
        this.changing = this.changing.bind(this)
    }
    
    changing(howis = "Parent"){
        this.setState(prevState=>({
            howis: howis,
            name: "learners"
        }))
    }
    render() {
        return (
            <div>
                <p>{this.state.howis} - {this.state.name}</p>
                
                <Child handle={this.changing}/>
            </div>
        )
    }
}

export default Parent
