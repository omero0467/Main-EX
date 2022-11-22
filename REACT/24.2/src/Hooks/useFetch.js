import  { useEffect, useState } from 'react'
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        async function fetchData (){
            try{
            const {data} = await axios.get(url)
            console.log(data);
            setData(data)
            setIsLoading(false)
        }catch(e){
            setError(e)
        }}
        fetchData()
    },[url])

    return {data,isLoading,error}
}

export default useFetch