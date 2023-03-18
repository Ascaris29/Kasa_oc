import axios from "axios";
import { useState } from "react";


export default function UseFetchApi(url){

    const [data, setData] = useState(null);
    async function fetchData(){
        const response = axios.get(url);
        setData(response.data);
    return data;

    }
    fetchData();
}
