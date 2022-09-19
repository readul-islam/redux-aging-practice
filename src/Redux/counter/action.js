//action creator

import { ADDBY, DECREMENT, INCREMENT, RESET } from "./actionType"

export const increment = () =>{
    return {
        type:INCREMENT
    }
};
export const decrement = () =>{
    return {
        type:DECREMENT
    }
}

export const reset = () =>{
    return {
        type:RESET
    }
}


export const addBy = (value) =>{
    return {
        type:ADDBY,
        payload: value
    }
}
 