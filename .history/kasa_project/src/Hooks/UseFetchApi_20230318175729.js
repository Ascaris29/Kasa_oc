import axios from "axios";
import { useState } from "react";


export default function UseFetchApi(url){
    try{
        const [data, setData] = useState([]);
        async function fetchData(){
            const response = axios.get(url);
            setData(response.data);  
        }
        fetchData();
    return [data, setData];
    }catch(e){

    }

   
    
}
