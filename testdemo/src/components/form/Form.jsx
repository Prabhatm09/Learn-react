import React from 'react'

export function Form() {
    return (
        <form>
            <h1 title="prabhat" >Air campus</h1>
            <h3>react testing class</h3>
            <p>good night ,thank you</p>
            <img src=" " alt='picture' />
            <div data-testid="custom"></div>
            <div>
                <label htmlFor='name'>name</label>
                <input type="text" id="name" placeholder='firstname' value={"prabhat"} />
            </div>
            <div>
                <label htmlFor='age'>age</label>
                <input id="age" />
            </div>
            <div>
                <label htmlFor='location'>location</label>
                <select id="location">
                    <option value="us" >US</option>
                    <option value="uk" >UK</option>
                    <option value="ind" >IND</option>
                    <option value="rsa" >Russia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" />I agree to the above terms
                </label>

            </div>
            <button>Submit</button>
        </form>
    )
}

