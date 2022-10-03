import React, { Component } from "react";
// import './App.css';

export class IncDes extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    increament = () => {
        this.setState((prev) => ({
            count : prev.count + 1
        }))
    }
    decreament = () => {
        this.setState((prev) => ({
            count : prev.count - 1
        }))
    }
    render(){
        return (
               <>
               <h1>count - {this.state.count}</h1>
               <button className="btn" onClick={this.increament} >Increment </button>
               <button className="btn" onClick={this.decreament} >dcrement </button>
               </>
        )
    }
}