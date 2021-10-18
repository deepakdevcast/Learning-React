import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greet: "Wellcome"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState(prevState =>({
            greet: "thank you"
        }),()=>{console.log(`${this.state.greet}`)})
        
    } 
    // 4th way
    arrowClickHandler = ()=>{
        this.setState(prevState =>({
            greet: "thank you"
        }),()=>{console.log(`${this.state.greet}`)})
    }
    render() {
        return (
            <div>
                <p></p>
                {/* 4 ways to bind and 3,4 is the best way */}
                
                {/* 1. by using bind method  not a good way*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Class Click</button> */}
                
                {/* 2. using arrow function not that good */}
                {/* <button onClick={()=>this.clickHandler()}>Class Click</button> */}

                {/* 3. defined the bind in the constuctor of class */}
                {/* <button onClick={this.clickHandler}>Class Click</button> */}

                {/* 4. create the handler function using arrow function */}
                <button onClick = {this.arrowClickHandler}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick
