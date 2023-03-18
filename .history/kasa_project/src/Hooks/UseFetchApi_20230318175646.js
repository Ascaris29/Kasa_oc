import axios from "axios";
import { useState } from "react";


export default function UseFetchApi(url){
    try{

    }catch(e)

    const [data, setData] = useState([]);
    async function fetchData(){
        const response = axios.get(url);
        setData(response.data);
        
    }
    fetchData();
    return [data, setData];
}
