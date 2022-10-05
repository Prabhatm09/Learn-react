import React, { Component } from "react";
import { PureComp } from "./PureComp";
import { ReguralExpression } from "./ReguralExpression"

export class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "amit"
        }
    }
    render(){
        return (
            <>
            <h1>Parent component</h1>
            <PureComp name={this.state.name}/>
            <ReguralExpression name={this.state.name}/>
            <button onClick={() => this.setState({name : "vasu"})} >Change</button>
            <button onClick={() => this.forceUpdate()} >Force update</button>
            </>
        )
    }
}