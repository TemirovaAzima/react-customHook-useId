import {useCounter} from './useCounter.js'

const App = () => {
    const {count, increment, decrement, reset} = useCounter();
    return (
        <div>
            <h1> Count : {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default App
