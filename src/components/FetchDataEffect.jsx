import {useEffect, useState} from "react";

const FetchDataEffect = ()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData (){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    },[])

    return(
        <div>
            <h1>
                First Post Title:
            </h1>
            {data.length>0 ? <h1>{data[0].title}</h1> : <p>Loading...</p>}
        </div>

    )
}
export default FetchDataEffect;