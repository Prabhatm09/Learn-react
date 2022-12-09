import React from 'react'
import { useDispatch } from 'react-redux';

export function Dashboard() {
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        //email id and password is correct 
        let information_or_action = {
            "type": "SET_LOGOUT_DATA",
            "payload": null
        }
        dispatch(information_or_action)
    }

    return (
        <>
            <h1 >Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

