
import React, { Component } from "react";
import { Button } from "./components/Button";
import "./App.css"; 

export class Aapp extends Component{
   constructor(props){
       super(props);
       this.state = {
           text: "Delete",
       };
   };
handleBtnApp = () => {
    this.setState((prev) => ({
        text:"Submit", 
    }));
};

render(){
    return (
        <div>
            <h1>Title: {this.props.name} and the bottle of water</h1>
            <p>the story of potter</p>
        <Button text={this.state.text} handleBtnApp={this.handleBtnApp} btnclass="cancel" />
        <Button  text="submit"  btnclass="submit"/>
        </div>
    )
}
}