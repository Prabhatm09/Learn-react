import React, { Component } from "react";

export class Names extends Component {
     constructor(props){
        super(props);
        this.state = {
            names : ["hema" , "ram" , "kiaran" , "karan"]
        }
     }
     render(){
        return(
            // <p>{this.state.names[0]}</p>

            this.state.names.map((name) => <p key={name} >{name}</p> )
        )
     }
}