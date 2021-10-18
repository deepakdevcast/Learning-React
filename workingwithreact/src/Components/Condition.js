import React, { Component } from 'react'

class Condition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }
        this.login = this.login.bind(this)
    }

    login() {
        this.setState(prevSate => ({
            isLogin: !prevSate.isLogin
        }))

    }
    // 2
    // text(){
    //     let message
    //     if(this.state.isLogin){
    //         message = "Logged In"
    //     }else{
    //         message = "Sign Up"
    //     }
    //     return message
    // }
    render() {

        // 1. using if/else
        // if (this.state.isLogin) {
        //     return (
        //         <div>
        //             <h2>logged In</h2>
        //             <button onClick={this.login}>Click me</button>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h2>Sign up</h2>
        //             <button onClick={this.login}>Click me</button>
        //         </div>
        //     )
        // }

        // 2 using variables
        // return (
        //     <div>
        //         <h2>{this.text()}</h2>
        //         <button onClick={this.login}>Click me</button>
        //     </div>
        // )
        
        // 3 using Ternary operator
        // return this.state.isLogin ? (
        //     <div>
        //         <p>Logged In</p>
        //         <button onClick={this.login}>Click me</button>
        //     </div>
        // ):(
        //     <div>
        //         <p>Sign Up</p>
        //         <button onClick={this.login}>Click me</button>
        //     </div>
        // )

        // 4 using Short circuit operator
        return (this.state.isLogin && <div>Logged In</div>) || (<button onClick={this.login}>Click me</button>)
    }
}

export default Condition
