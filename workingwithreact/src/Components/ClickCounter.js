import React, { Component } from 'react'
import counterhoc from './Counterhoc'
class ClickCounter extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.IncrementCount}>Click {this.props.count} times</button>
            </>
        )
    }
}

export default counterhoc(ClickCounter,2)
