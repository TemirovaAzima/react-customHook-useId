import {useId, useState} from 'react'
export const App = ()=>{
    const stableId = useState(useId())[0];
    const secondStableId = useState(useId())[0];
    const [count, setCount] = useState(0);
    const id = useId();

    return(
        <div>
            <h1>My stableId : {stableId} </h1>
            <h1>My stableId : {secondStableId}</h1>
            <h1>{id}</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}