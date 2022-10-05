import React, { Component } from "react";

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
               email: "",
               password: "",
               country : "",
        };
    }

    handleEmail = (event) => {
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        })
    }
     handlePwd = (event) => {
        console.log(event.target.value);
        this.setState({
            password : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email , this.state.password);
    }

    handleSelect = (event) => {
        console.log(event.target.value );
        this.setState({
            country : event.target.value
        })
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email" >Email:</label>
                    <input type="text" name="email" id="email" onChange={this.handleEmail} value={this.state.email} />
                </div>
                 <div>
                    <label htmlFor="pwd" >Password:</label>
                    <input type="text" name="password" id="pwd" onChange={this.handlePwd} value={this.state.password} />
                </div>
                <div>
                    <select onChange={this.handleSelect} value={this.state.country}  name="countries" id="country">
                        <option value="India">INDIA</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}