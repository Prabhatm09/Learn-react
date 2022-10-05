import React, { Component } from "react";
import { Dummy } from "./Dummy"
import { UIbackup } from "./UIbackup"

export class ErrorBoundary extends Component{
    render(){
        return (
            <>
    
            <p>Country</p>
                    <UIbackup>
            <Dummy country="india" />
              </UIbackup >
               <UIbackup>
            <Dummy country="china" />
              </UIbackup >
               <UIbackup>
            <Dummy country="indo" />
            {/* <Dummy country="usa" /> */}
            </UIbackup >
            </>
        )
    }
}
