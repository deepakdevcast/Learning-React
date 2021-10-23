import React, { Component } from 'react'
import Counter from './Counterhoc'

class HoverCounter extends Component {
    render() {
        return (
            <h1 onMouseEnter={this.props.IncrementCount}>Hover {this.props.count} times</h1>
        )
    }
}

export default Counter(HoverCounter,1)
