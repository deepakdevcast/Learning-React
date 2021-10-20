import React, { Component} from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            name: "",
            email:"",
            password:"",
            confirmPass:""
        }
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    nameHandler = (event)=>{
        this.setState(prevState=>({
            name: event.target.value
        }))
    }
    emailHandler =(event)=>{
        this.setState(prevState=>({
            email: event.target.value
        }))
    }
    passwordHandler =(event)=>{
        this.setState(prevState=>({
            password: event.target.value
        }))
    }
    cpasswordHandler =(event)=>{
        this.setState(prevState=>({
            confirmPass: event.target.value
        }))
    }
    submitHandler =(event)=>{
        alert(`${this.state.name} ${this.state.password}`)
        event.preventDefault()
    }
    render() {
        return (
            <>
            <p></p>
                <form onSubmit={this.submitHandler}>
                    <label>Full Name</label>
                    <input type="text" ref={this.inputRef} on value={this.state.name} onChange={this.nameHandler} required></input>
                    <p></p>
                    <label>Email</label>
                    <input type="email" value={this.state.email} onChange={this.emailHandler} required></input>
                    <p></p>
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.passwordHandler} required></input>
                    <p></p>
                    <label>Confirm Password</label>
                    <input type="password" value={this.state.confirmPass} onChange={this.cpasswordHandler} required></input>
                    <p></p>
                    <button type="submit">Sign Up</button>
                </form>
            </>
        )
    }
}

export default Refs
