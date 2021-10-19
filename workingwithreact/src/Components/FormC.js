import React, { Component } from 'react'

class FormC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            password: ""
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName(event){
        this.setState(prevState=>({
            name: event.target.value
        }))
    }
    changePassword = (event)=>{
        this.setState(prevState=>({
            password: event.target.value
        }))
    }

    // handling the form submission
    validateHandler=(event)=>{
        if(this.state.name.length>6 && this.state.password.length>=6){
            alert(`valid input ${this.state.name} ${this.state.password}`)
        }else{
            alert("invalid")
        }
        // to prevent the refresh after the submission
        event.preventDefault();
    }
    render() {
        const {name,password} = this.state
        return (
            <div>
                <form onSubmit={this.validateHandler}>
                    <div>
                        <label>Name: </label>
                        <input type='text' value={name} onChange={this.changeName}/><p></p>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={this.changePassword}/><p></p>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormC
