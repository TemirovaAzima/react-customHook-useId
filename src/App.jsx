import {useId} from 'react'

const items = ['apple', 'banana', 'mango']
export const App = ()=>{

    return(
        <ul>
            {items.map(item=>{
                const id = useId();  // in every re-render will create a new id
                console.log(id)
                return(
                    <li key={Math.random()} id={id}>{item}</li>
                )
            })}
        </ul>
    )
}