
import { authActions } from "../counter/authSlice";


function checkagedLogin(loginData){
    return (dispatch , getState) => {
        console.log("my chedkc" ,loginData)
        if(loginData["age"] < 34){

            dispatch(authActions.login(loginData))
        }
    }

}

export default checkagedLogin