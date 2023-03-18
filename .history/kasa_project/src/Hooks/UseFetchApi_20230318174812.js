import axios from "axios";
import { useState } from "react";


export default function UseFetchApi(){

    const [data, setData] = useState(null);
    async function fetchData(url){
        const response = axios.get(url);
        setData(response.data)
        return data;
    }
    
}
