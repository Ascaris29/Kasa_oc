import axios from "axios";
import { useState } from "react";


export default function UseFetchApi(url){
    const [data, setData] = useState([]);
    try{
        async function fetchData(){
            const response = awaaxios.get(url);
            setData(response.data);  
        }
        fetchData();
       
    }catch(e){
        console.log("erreur")
    }
    return [data, setData];
}
