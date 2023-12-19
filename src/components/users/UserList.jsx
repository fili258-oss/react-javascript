import { useEffect, useState } from "react";

export const UserList = ({endopint}) => {
    const [data, setData] = useState([])

    const fetchData = async() =>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endopint}`);
            const data = await response.json();
            console.log(data);
            setData(data);

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [endopint])

  return (
    <>
    
    <ul>
        {endopint== 'users' ? data.map( data => <li key={data.id}>{data.name}</li>)
                            : data.map( data => <li key={data.id}>{data.body}</li>)}
    </ul>
    </>
  )
}
