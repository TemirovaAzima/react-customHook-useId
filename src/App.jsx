import {useEffect} from "react";
export const App = () => {
    useEffect(()=>{
        console.log('useffect works')
    });
    return (
        <div>
            <h1>BasicEffect</h1>
        </div>
    )
}


