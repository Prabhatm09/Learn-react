import React, {useState} from 'react';
import { LoginHeader  } from './LoginHeader';
import "./LoginForm.css"
import LogOut from './LogOut';


export const LoginForm = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUser, setLoggedInUser] = useState(null)

    const validateAndSetUserName = (e) => {
        let value = e.target.value;
        if (value.length > 4){
            setUserName(value)
        } else {
            console.log('Username is not valid.');
        }
    }

    const validateAndSetPassword = (passwordValue) => {
        if (passwordValue.length < 8){
            console.log('password is short')
        } else if (passwordValue.length > 20) {
            console.log('password is too big')
        } else {
            setPassword(passwordValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({userName, password});
        
        if(isAlreadyExist(userName, password)){
            loginUser(userName, password)
        } else {
            signup(userName, password)
        }
    }

    // returns boolean
    const isAlreadyExist = (username, password) => {
        let users = localStorage.getItem('users')
        if (users) {
            users = JSON.parse(users)
            
            let filtered_user = users.filter((user) => user['userName'] === username && user['password'] === password )
            if (filtered_user.length > 0) {
                return true
            }
            return false
        }
    }

    const loginUser = (username, password) => {
        console.log(`logging in ${username}`)
        let loggedInUser = {
            'userName': username,
        }
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        setLoggedInUser(loggedInUser)

    }

    const signup = (username, password) => {
        let users = localStorage.getItem('users')
        if (users) {
            users = JSON.parse(users);
        } else {
            users = []
        }

        users.push({
            'userName': username,
            'password': password
        })
        users = JSON.stringify(users)
        localStorage.setItem('users', users)
    }
    
    
    const handleLogout = () => {
        setLoggedInUser(null)
        localStorage.setItem('loggedInUser', null)
        setUserName("")
        setPassword("")
    }
    


    return (
        <>
            {
                loggedInUser ? 
                <>
                    <LogOut />
                <div className='logout'>
                    <h1>Hello, {loggedInUser['userName']}</h1>
                    <button className='logiutbtn' onClick={handleLogout}>Log Out</button>
                    </div>
                </>
                :
                <>
                    <LoginHeader />
                <form className='Post' method='POST'>
                <label className='username' htmlFor="username">Username</label>
                <input className='inout_username' name="username" id="username" type="text" onChange={(e) => validateAndSetUserName(e)}  />
                <br/>
                <label className='password' htmlFor="password">Password</label>
                <input className='input_password' name="password" type="password" id="password" onChange={(e) => validateAndSetPassword(e.target.value)}  />
                <br/>
                <button className='btnlogin' type="submit" onClick={handleSubmit} disabled={userName.length === 0 || password.length === 0} >Login</button>
                </form>
                </>
            }
        </>
    )
}


