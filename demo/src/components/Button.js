import React, { Component } from "react";

export class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
        text: "submit",
        count:0,
        }
    }
handleClick = () => {
    if(this.state.text === "submit"){
        this.setState({
            text: "cancelled",
        });
    }else{
        this.setState({
            text:"submit",
        })
    }
}
increament = () => {
         this.setState((prev)=>({
             count : prev.count + 1,
         }));
     };
    render(){
        const {text , btnclass} = this.props
        return(
<div>
             <h1>{this.state.count}</h1>
            <button onClick={this.props.handleBtnApp} className={btnclass}>{text}</button>
             <button onClick={this.increament} >increament</button>
        </div>
        )
        
    }
}

 
// export class Button extends Component{
//     constructor(props){
//         super(props);
//             this.state = {
//                 text : "submit",
//                 count: 0
//             }
//     }

//     handleClick = () => {
//         if(this.state.text === "submit"){
//             this.setState({
//                 text: "cancelled"
//             });
            
//         }else{
//             this.setState({
//                 text: "submit"
//             });
//         }
//     }
// increament = () => {
//     this.setState((prev)=>({
//         count : prev.count + 1,
//     }));
// };
//     // increament = () => {
//     //     this.setState(
//     //         {
//     //             count: this.state.count + 1
//     //         }, 
//     //         () => {
//     //             console.log(this.state.count );
//     //         }
//     //     )
//     // }

//     render(){
//         return(
//             <div>
// {/* <h1>{this.state.count}</h1> */}
// {/* <button onClick={this.increament} >increament</button> */}
//                 <button onClick={this.props.handleBtnApp} className={this.props.class}>{this.state.text}</button>
//             </div>
//              ) 
//     }
// }
