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