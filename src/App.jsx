import {useId} from "react";

const fruits = ['apple', 'banana', 'mango']
export const App = () => {
    const listId= useId()
    return(
        <ul>
            {fruits.map((fruit, index)=>{
                const id = `${listId}-${index}`
                console.log(id)
                return(
                    <li key={Math.random()} id={id}>{fruit}</li>
                )
            })}
        </ul>
    )
}