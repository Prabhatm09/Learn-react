import React, { Component } from "react";

export class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {userName :"Prabhat1234",
            password:"123465",}
            ]
        }
    
    }
    render(){
        return(
            <>
            <div className="container">
            <div className="heading">
            <h1>Login Here</h1>
            </div>
            <div className="user-container">
            <input placeholder="username" >{this.state.data.userName}</input>
            <input placeholder="password" >{this.state.data.password}</input>
            </div>
            <button type="submit" id="submit">Submit</button>
            </div>
            </>
        )
    }
}