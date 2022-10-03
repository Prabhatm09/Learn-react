import React, { Component } from "react";

export class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            childText : "Child default"
        }
        
    }
    childchange = () => {
        this.setState({
            childText : "changed child"
        })
    }

    render(){
        console.log("child");
        
        return (
            <>
        <h1>This is child component - {this.state.childText}</h1>
        <button onClick={this.childchange} >Child</button>
        <button onClick={this.props.changeparent} >change parent from child</button>
        </>
    )
}
}