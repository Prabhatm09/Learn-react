import React from "react";
import "./Greet.css"


export function Greet({name}){
    return (
      <div>
        <h1 className="title">
          {name ? `hello ${name}` :  `guest` } 
           </h1>
      </div>
    );
}