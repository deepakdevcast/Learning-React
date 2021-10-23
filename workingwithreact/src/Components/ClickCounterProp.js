import React, { Component } from 'react'

class ClickCounterProp extends Component {
    render() {
        return (
            <button onClick={this.props.IncrementCount}>Click {this.props.count} times-props</button>
        )
    }
}

export default ClickCounterProp
