import React, { Component } from "react";

export class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : false,
        };
        // this.handleclick = this.handleclick.bind(this)//use to bind the handle funct with clss
    
    }
//to refer parent fucntion use arrow function
    handleclick = (click) => {
this.setState({
    isToggleOn : !this.state.isToggleOn
}) 
    }
    render(){
 //state -> store  some data inside a variable , state value are changeable
         return (
        //  <button onClick={this.handleclick}--> without parameter


        // <button onClick={()=>this.handleclick({
        //     name:"prabhat"
        // })}-->pass as object also


         <button onClick={()=>this.handleclick("clicking")} >{this.state.isToggleOn ? "ON"  : "OFF"}</button>

         )
    }
}