import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect} from "react";

import axios from "axios";


export default function UseFetchDataById({url}){
    const { idUrl } = useParams();
    const[data, setData] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        async function getDataById(){
                 const response = await axios.get(url);
                 const dataCurrentId = await response.data.find(i => i.id === idUrl);
                 response.data.map(() => setData(dataCurrentId));
                if (dataCurrentId === undefined){
                    navigate("/404");
                }           
        }
    getDataById()
    return [data, setData]
    }, [idUrl, navigate, url, data]);
    
}
