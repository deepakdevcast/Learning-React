import React, { Component } from "react";

const counterhoc = (WrappedComponent,inc) => {

    class Counterhoc extends Component {
        constructor(props) {
            super(props)

            this.state = {
                clickCount: 0
            }
        }

        IncrementCount = () => {
            this.setState(prevState => ({
                clickCount: prevState.clickCount + inc
            }))
        }
        render() {
            return <WrappedComponent 
            count={this.state.clickCount} 
            IncrementCount={this.IncrementCount} 
            {...this.props}
            />
        }
    }
    return Counterhoc
}

export default counterhoc