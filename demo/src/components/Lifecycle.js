import React, { Component }  from "react";

export class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 1,
        };
    }

    increamentCount = () => {
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }
decreamentCount = () => {
        this.setState(prevState => ({
            count : prevState.count - 1
        }))
    }
    resetCount = () => {
        this.setState(prevState => ({
            count : prevState.count = 0
        }))
    }


    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log("component did mount");
    }

    shouldComponentUpdate(){
        console.log("should Component Update");
    }

    componentWillUpdate (){
        console.log("component will update");
    }

    componentDidUpdate (){
        console.log("component did update");
    }
    render(){
        console.log("rendering");
        return (
            <>
            <h1>count - {this.state.count}</h1>
            <button onClick={this.increamentCount} >increament</button>
            <button onClick={this.resetCount} >reset</button>
            <button onClick={this.decreamentCount} >decreament</button>

            </>
        )
    }
}