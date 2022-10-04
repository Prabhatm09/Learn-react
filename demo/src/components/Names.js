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
<>
            {this.state.names.map((name) => <p key={name} >{name}</p> )} // if two person with same name so key name will throw error
            {this.state.names.map((name , index) => <p key={index} >{name}</p> )} // if inhow i remove any mid element like index(2) so remainihg data going to shift upward which take lots of time 
            /so for key always use id
            </>
        )
     }
}