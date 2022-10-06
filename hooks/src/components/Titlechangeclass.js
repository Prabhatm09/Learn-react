import React, { Component } from 'react'

export  class Titlechangeclass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    handleclick = () => {
        this.setState({
            count : this.state.count + 1 
        });
    }
componentDidMount(){
  document.title = `${this.state.count} times clicked`;
}

componentDidUpdate(){
  document.title = `${this.state.count} times clicked`;
}



  render() {
    return (
      <div>
        <button onClick={this.handleclick}>click - {this.state.count}</button>
      </div>
    )
  }
}
