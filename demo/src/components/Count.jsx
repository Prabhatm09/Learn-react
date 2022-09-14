import React , {Component} from "react";

 export class Count extends Component {
    constructor(props){
        super(props)
        this.state = {
            Count : 0
        }
    }
    Ins =()=>{
        this.setState((prev)=>{
let obj = {
    Count : prev.Count+1
}
return obj
        })
    }
Desc =()=>{
        this.setState((prev)=>{
            let obj = {
                Count : prev.Count-1
            }
            return obj
        })
    }
    render(){
        return (
            <>
            <button onClick={this.Ins}>Inc</button>
            <p>{this.state.Count}</p>
            <button onClick={this.Desc}>desc</button>
            </>
        )
    }
}
    