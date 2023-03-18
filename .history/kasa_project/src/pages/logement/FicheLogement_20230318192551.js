import style from "./FicheLogement.module.scss";
import CardDescription from "../a_propos/components/carddescription/CardDescription";
import Tags from "./components/tags/Tags";
import Caroussel from "./components/caroussel/Caroussel";
import Ratings from "./components/Ratings/Ratings";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect} from "react";
import { UrlApiContext } from "../../context/UrlApiContext";
import UseFetchApi from "../../Hooks/UseFetchApi";
import axios from "axios";


export default function FicheLogement(){

    const { idUrl } = useParams();
    const BASE_URL = useContext(UrlApiContext);
    const[data, setData] = useState();
    const navigat = useNavigate()
 
   
    useEffect(() => {
        async function getDataById(){
            try{
                const response = await axios.get(BASE_URL);
                 const repData = response.data;
                //console.log(repData)
                const donnée = repData.find(i => i.id === idUrl);
                if (donnée === undefined){
                    navigat("/404");
                }
                setData(donnée)
            }catch(e){
                return <p>Aucune donnée n'a été trouvée ! </p>
            }
        }
    getDataById()

    }, []);
    
    // const arrayTags = data.tags;
    // const arrayEquipments = data.equipments;
    console.log(data)
 
    return (
        <>
        <div>oui</div>
            {data&& (



            )
            {/*  */}
        </>
        
    )
 }