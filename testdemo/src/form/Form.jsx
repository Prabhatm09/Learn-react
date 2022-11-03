import React from "react";
// import "./Counter.css"


export function Form(){
    return (
      <form>
        <div>
          <lable htmlfor="name">name</lable>
          <input type="text" id="name"/>
        </div>
        <div>
          <lable htmlfor="age">age</lable>
          <textarea id="age"></textarea>
        </div>
        <div>
          <lable htmlfor="location">Loction</lable>
          <select id="location">
            <option value="us">US</option>
            <option value="uk">UK</option>
            <option value="ind">INDIA</option>
            <option value="rsa">Russia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms"/> I agree terms and conditions 
          </label>
        </div>
      </form>
    );
}