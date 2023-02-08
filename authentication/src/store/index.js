import {createStore} from "redux";
import AUTH_ACTION_TYPES from "./actions/action";


const DEFAULT_STATE = {
    "loggedInUser" : null,
}


const authReducer = (state=DEFAULT_STATE , action) => {
    if(action.type === AUTH_ACTION_TYPES.loginAction){
        return {"loggedInUser" : action.payload}
    }else if(action.type === AUTH_ACTION_TYPES.logoutAction){
        return {"loggedInUser" : action.payload}
    }
    return state
}

const store = createStore(authReducer)

export default store