import { createStore } from "redux";

const DEFAULT_STATE = {
    counter: 0,
    name: "prabhat",
    mobile: [],
    desktop: [
        {
            make: "lenovo"
        },
        {
            make: "lenovo"
        }
    ]
}

// action = { "type": "increment" , "payload":{ "step" :5}}
const counterReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === "increment") {
        return { ...state, counter: state.counter + action.payload.step }
    } else if (action.type === "decrement") {
        return { ...state, counter: state.counter - 1 }
    }
    return state
}

const store = createStore(counterReducer)

export default store