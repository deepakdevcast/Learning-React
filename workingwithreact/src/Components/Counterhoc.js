import React, { Component } from "react";

const counterhoc = (WrappedComponent)=>{

    class Counterhoc extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                clickCount: 0
            }
        }
        
        IncrementCount=()=>{
            this.setState(prevState=>({
                clickCount:prevState.clickCount+1
            }))
        }
        render(){
            return <WrappedComponent count={this.state.clickCount} IncrementCount={this.IncrementCount}/>
        }
    }
    return Counterhoc
}

export default counterhoc