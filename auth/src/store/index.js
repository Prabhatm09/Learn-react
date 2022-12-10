import { createStore } from "redux";


const DEFAULT_STATE = {
    "LoggedInUsers": null,
}

const authReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === "SET_LOGIN_DATA") {
        return { "LoggedInUsers": action.payload }
    } else if (action.type === "SET_LOGOUT_DATA") {
        return { "LoggedInUsers": action.payload }
    }
    return state
}

const store = createStore(authReducer)

export default store


// import { createStore } from "redux";
// import AUTH_ACTION_TYPES from "./actions/action";

// const DEFAULT_STATE = {
//     "loggedInUser": null,
//     "mobiles": [],
//     "desktop": [],
// }


// const reducer = (state = DEFAULT_STATE, action) => {

//     // slice 1 (auth)
//     if (action.type === AUTH_ACTION_TYPES.loginAction) {
//         //toolkit
//         state.loggedInUser = action.payload

//         // without toolkit
//         let new_state = state
//         new_state.loggedInUser = action.payload
//         return new_state

//         // return {...state, "loggedInUser": action.payload}
//         // {"loggedInUser": {"email": "manit@gmail.com", "password": "pass"}}
//     }
//     else if (action.type === 'LOGOUT') {
//         return { "loggedInUser": null }
//     }
//     else 'forgot pass',





//         // slice 3
//         mobiles



//     // slice 4
//     desktop


//     return state
// }


// const store = createStore(authReducer)

// export default store







// function add(a, b = 1) {
//     return a + b
// }


// add(2, 3) //5

// add(4) //5