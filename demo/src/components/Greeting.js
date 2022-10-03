import React, { Component } from "react";

export class Greeting extends Component{
constructor(props){
    super(props);
    this.state = {
        isLoggedIn : true,
    }
}
 getwelcomemessge = () => {
    let welcomemessage;
    if(this.state.isLoggedIn){
        welcomemessage = (
            <>
            <p>welcome  anish</p>
            <p>welcome prabhat</p>
            </>
        )
    }else{
        welcomemessage =  <p>please login</p>
    }
    return welcomemessage
 }

render(){

    // let welcomemessage;
    // if(this.state.isLoggedIn){
    //     welcomemessage = (
    //         <>
    //         <p>welcome  anish</p>
    //         <p>welcome prabhat</p>
    //         </>
    //     )
    // }else{
    //     welcomemessage =  <p>please login</p>
    // }

    return(
        <>
        <h1>Welcome to aircampus</h1>
        {/* {this.state.isLoggedIn ? <p>welcome  anish</p> : <p>please login</p>\} */}
        {/* {welcomemessage} */}
        {this.getwelcomemessge()}
        <p>Ths is my first class</p>
        </>
    )
}
}