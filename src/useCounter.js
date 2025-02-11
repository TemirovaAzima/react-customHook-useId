import {useReducer} from "react";
const initialState = {count:0}
const countReducer = (state,action) =>{
    switch(action.type){
        case "Increment":
            return{count: state.count+1}
        case "Decrement" :
            return {count: state.count-1}
        case "IncrementByAmount":
            return {count: state.count + action.payload}
        case "DecrementByAmount":
            return {count: state.count - action.payload}
        case "Reset" :
            return {count: 0}
        default:
            return state;
    }
}

export const useCounter=()=>{
    const [state, dispatch] = useReducer(countReducer, initialState);

    const increment = ()=> dispatch({type:"Increment"});
    const decrement = ()=> dispatch({type:"Decrement"});
    const incrementByAmount = (amount)=> dispatch({type:"IncrementByAmount",payload:amount});
    const decrementByAmount = (amount)=> dispatch({type:"DecrementByAmount",payload:amount});
    const reset = ()=> dispatch({type:'Reset'})

    return {count: state.count, increment, decrement, incrementByAmount,decrementByAmount,reset}
}