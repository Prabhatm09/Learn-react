import React, { useState } from 'react'
import userData from '../database/allUsers';
import { useDispatch } from 'react-redux';

export function LoginForm() {

    const [loggedIn, setLoggedIn] = useState({});
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        let result = userData.allUsers.filter((user) => {
            return user.email === loggedIn.email && user.password === loggedIn.password
        })
        console.log("result", result)
        // result = [{ "email": "raghvendra@gmail.com", "password": "pass" }]
        // result[0] = [{ "email": "raghvendra@gmail.com", "password": "pass" }]

        if (result[0]) {
            //email id and password is correct 
            let information_or_action = {
                "type": "SET_LOGIN_DATA",
                "payload": {
                    ...result[0]
                }
            }
            dispatch(information_or_action)
        } else {
            //incorrect
            alert("failed to login")
        }
    }
    return (
        <>
            <h1 style={{ "textAlign": "center" }} >LoginForm</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(event) => setLoggedIn({ ...loggedIn, "email": event.target.value })} />
                <br />
                <label htmlFor="password">password</label>
                <input type="password" name='password' id="password" onChange={(event) => setLoggedIn({ ...loggedIn, "password": event.target.value })} />
                <br />
                <button>Login</button>
            </form>
        </>
    )
}


