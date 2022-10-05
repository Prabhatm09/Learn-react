import React, { Component } from 'react'

export  class UIbackup extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
        }
    }
    static getDrivedStateFromError(error){
        // console.log(error);
        return {
            hasError: true,
        }
    }

    componentDidCatch(error , info){
        console.log(error);
        console.log(info);
    }

  render() {
    if(this.state.hasError){
return (
      <div>Something went wrong</div>
    ) 
    }else{
        return <>{this.props.children}</>
    }
    
  }
}
