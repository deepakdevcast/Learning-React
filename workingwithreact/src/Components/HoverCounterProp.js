import React, { Component } from 'react'

class HoverCounterProp extends Component {
    render() {
        return (
            <h1 onMouseEnter={this.props.IncrementCount}>Hover {this.props.count} times-props</h1>
        )
    }
}

export default HoverCounterProp
