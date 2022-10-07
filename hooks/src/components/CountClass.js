import React , { Component } from "react";

export class CountClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }

    increament = (step) => {
        this.setState({
            count :this.state.count + step
        })
    }
    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={ ()=>  this.increament(4)}>ADD</button>
            </>
        )
    }
}