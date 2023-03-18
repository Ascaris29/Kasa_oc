import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect} from "react";
import { UrlApiContext } from "../../context/UrlApiContext";
import axios from "axios";


export default function UseFetchDataById(url){
    const { idUrl } = useParams();
    const[data, setData] = useState();
    const navigate = useNavigate()


    useEffect(() => {
        async function getDataById(){
                 const response = await axios.get(BASE_URL);
                 const dataCurrentId = await response.data.find(i => i.id === idUrl);
                 response.data.map(() => setData(dataCurrentId));
                if (dataCurrentId === undefined){
                    navigate("/404");
                }           
        }
    getDataById()
    
    }, [idUrl, navigate, BASE_URL]);
}
