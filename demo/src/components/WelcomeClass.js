import React , { Component} from "react";

 export class WelcomeClass  extends Component {
     
    render(){
        const { name , age } = this.props // destructing data
        //    return  <h1>Welcome . to aircampus {this.props.name} , my age is {this.props.age} - Class Component</h1>
           return  <h1>Welcome . to aircampus {name} , my age  is {age} - Class Component</h1>
        
    }
}