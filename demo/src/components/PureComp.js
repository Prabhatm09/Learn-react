import React, { PureComponent } from "react";

//optimisation of reaxt components

//shouldcomponentUpdate -> validate current  props  and newly coming  props
//if both are same . return false
//if there is any diff  , return true

export class PureComp extends PureComponent{
    render(){
        return (
            <h1>Pure component -  {this.props.name}</h1>
        )
    }
}