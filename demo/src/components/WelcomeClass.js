import React  , {Component} from "react";

export  class Welcomeclass extends Component {
    render(){
        const { name , age , city , adress} = this.props  // writing again and again this.props use destrcutre method
        // this.props.name = "raju"; // props read only data cant change value
        
        return (
        //    <h1>welcome {this.props.name}</h1> 
        <h1>Welcome to class based  { name}  {age} {city} {adress} components</h1>
        )
    }
}