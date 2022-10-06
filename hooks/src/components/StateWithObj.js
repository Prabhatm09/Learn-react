import React, { useState } from "react";

export function StateWithObj() {
    const [ name , setName ] = useState({
        firstName : "",
        lastName : "",
    });

    return (
        <>
        <form>
            <div>
                <label htmlFor="">first Name</label>
                <input type="text" id="fname"  onChange={(e) => {
                    setName({...name ,
                        firstName : e.target.value
                    })
                }} value={name.firstName} />
            </div>
            <div>
                <label htmlFor="">last Name</label>
                <input type="text" id="lname" onChange={(e) => {
                    setName({ ...name , 
                        lastName : e.target.value
                    })
                }} value={name.lastName} />
            </div>
            <p>My fist name is {name.firstName}  and last name is {name.lastName}</p>
        </form>
        </>
    )
}