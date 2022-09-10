import React , { Component} from "react";

 export class Toggle extends Component {
    //state - store some data inside a variable
    constructor (props){
        super(props);
        //state value are changable
        this.state ={
           isToggleOn : true,
        }; 
        // this.handleClick = this.handleClick.bind(this)
    }

handleClick = (click) => {
    // console.log(this);
    // console.log('clicking');
    this.setState({
        isToggleOn : !this.state.isToggleOn,
    });
};

    render(){
        // return <button onClick={()=>
        // this.handleClick({
        //     name : "prabhat"
        // })}>
        return <button onClick={() => this.handleClick("clicking")}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
    }
}