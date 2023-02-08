import React from 'react';
import { useDispatch } from 'react-redux';
// import AUTH_ACTION_TYPES from '../store/actions/action';
import { authActions } from '../features/counter/authSlice';

const Dashboard = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        // let info_or_action = {
        //     "type": AUTH_ACTION_TYPES.logoutAction,
        //     "payload": null
        // }
        dispatch(authActions.logout())
    }

    return (
        <>
        <h1 style={{"textAlign":"center"}} >Dashboard page</h1>
        <button onClick={handleLogout}>logout</button>
        </>
    )
}



export default Dashboard