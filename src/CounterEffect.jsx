import {useEffect, useState} from "react";

export const CounterEffect =()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('Count:', count);
        document.title=`Count: ${count}`
    },[count]);
    return(
        <div>
            CounterEffect
            <h1>Count :{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}