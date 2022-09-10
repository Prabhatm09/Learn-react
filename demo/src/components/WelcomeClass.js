import React , { Component} from "react";
import "./Class.css"

 export class WelcomeClass  extends Component {
     
    render(){
        const { name ,  age , place , district } = this.props // destructing data
        //    return  <h1>Welcome . to aircampus {this.props.name} , my age is {this.props.age} - Class Component</h1>
           return  <h1 className="header">Welcome . to aircampus {name} , my age  is {age} {place} {district} - Class Component</h1>
        
    }
}