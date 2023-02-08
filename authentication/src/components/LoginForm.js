import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import usersData from '../database/allUsers';
// import AUTH_ACTION_TYPES from '../store/actions/action';
import { authActions } from '../features/counter/authSlice';
import checkedAgeLogin from "../features/thunks/auth"

const LoginForm = () => {

    const [loginData, setLoginData] = useState({})
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault()
        

        let result = usersData.allUsers.filter((user) => {
            return user.email === loginData.email && user.password === loginData.password
        })
        // console.log('clicked' , result)
        

        if (result[0]) { 
            // let info_or_action = {
            //     "type": AUTH_ACTION_TYPES.loginAction,
            //     "payload": {
            //         ...result[0]
            //     }
            // }
            // dispatch(info_or_action)
            dispatch(checkedAgeLogin({...result[0]}))
        } else {
            alert('not correct')
        }

    }

    return (
        <>
            <h1 style={{ "textAlign": "center" }}>Login Page</h1>

            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(event) => setLoginData({ ...loginData, "email": event.target.value })} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(event) => setLoginData({ ...loginData, "password": event.target.value })} />
                <br />
                <button>Login</button>
            </form>
        </>
    )
}



export default LoginForm