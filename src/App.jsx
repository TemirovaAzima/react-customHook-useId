import {useCounter} from "./useCounter.js";
import {useState} from "react";

const App = () => {
    const {count, increment, decrement, incrementByAmount, decrementByAmount,reset} = useCounter();
    const [inputValue, setInputValue] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <input
                type="number"
                value={inputValue}
                placeholder='enter number'
                onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {
                incrementByAmount(Number(inputValue));
                 setInputValue(0)}}
                >Add</button>
            <button onClick={() => {
                decrementByAmount(Number(inputValue))
                setInputValue(0)}}
               >Subtract</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default App

