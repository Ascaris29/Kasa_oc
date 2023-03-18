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
    const navigate = useNavigate()
 
   
    useEffect(() => {
        async function getDataById(){
            try{
                 const response = await axios.get(BASE_URL);
                const dataCurrentId = response.data.find(i => i.id === idUrl);
                res.data.map(() => setData(da))
                if (dataCurrentId === undefined){
                    navigate("/404");
                }
                setData(dataCurrentId)
            }catch(e){
                return <p>Aucune donnée n'a été trouvée ! </p>
            }
        }
    getDataById()

    }, []);
    
    const arrayTags = data.tags;
    const arrayEquipments = data.equipments;
    console.log(data)
 
    return (
        <>
            {data&& (
                    <div className={`${style.fichelogement} `}>
                    <div className={`${style.fichelogementBackground} d-flex`}>
                        <Caroussel img={data.pictures}/>
                    </div>
                    <div className={`${style.fichelogementContent}`}>
                        <div className={`${style.fichelogementDescription}`}>
                            <div className="en-tete d-flex flex-column">
                                <h1 className={`${style.fichelogementTitle}`}>{data.title}</h1>
                                <p className={`${style.fichelogementSousTitle}`}>{data.location}</p>
                                <div className={`${style.fichelogementTags}`}>
                                    {arrayTags.map(i => {return <Tags text={i} key={i}/>})}
                                </div>    
                            </div>
                                <div className={`${style.fichelogementEnTete}`}>
                                    <div className={`${style.fichelogementIdentity} d-flex align-center`}>
                                        <p>{data.host['name']}</p>
                                        <img className={`${style.fichelogementPhotoIdentite}`} src={ data.host['picture'] } alt="photographie de l'utilisateur" />
                                    </div>
                                    <Ratings note={data.rating}/>
                                </div>
                        </div>
                    </div>
                    <div className={`${style.fichelogementBlocs} d-flex`}>
                            <CardDescription classNameCard={`${style.fichelogementCard}`} title="Description" text={data.description}/>
                            <CardDescription classNameCard={`${style.fichelogementCard}`} title="Équipements" text={arrayEquipments.map(i => { return <p>{i}</p>})}/>
                    </div>
                </div>
                )
            }
        </>  
    )
 }