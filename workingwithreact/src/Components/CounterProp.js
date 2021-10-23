import React, { Component } from 'react'

class CounterProp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    IncrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }
        ))
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.IncrementCount)}
            </div>
        )
    }
}

export default CounterProp
