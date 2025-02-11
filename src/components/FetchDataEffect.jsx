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
    },[]);
    const changeTitle = ()=>{
        setData(
            data.map((data)=> (data.id===3 ? {...data, title :"Hello React"} : data))
        )
    };
    const removeTitle = ()=>{
        setData(
            data.filter((data)=>data.id!==3)
        )
    }

    return(
        <div>
            <h1>
                First Post Title:
            </h1>
            {data.length>0 ? <h1>{data.map((data)=>(
                <h2 key={data.id}>{data.title}</h2>
            ))}</h1> : <p>Loading...</p>}
            <button onClick={changeTitle}>Change Title</button>
            <button onClick={removeTitle}>Remove Title</button>
        </div>

    )
}
export default FetchDataEffect;