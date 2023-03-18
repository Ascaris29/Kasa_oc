import axios from "axios";
import { useState } from "react";


export default function UseFetchApi(url){
    const [data, setData] = useState([]);
    try{
        async function fetchData(){
            const response = await axios.get(url);
            setData(response.data);  
        }
        
       
    }catch(e){
        console.log("erreur")
    }
    fetchData();
    return [data, setData];
}
