import style from './CardLogement.module.scss';
import { NavLink } from "react-router-dom";
import { data } from "../../../data/Data";


export default function CardLogement({className, title, cover, id}){
    data && 
    return (
        
        <NavLink className={`${style.card} ${className}`} to={`/logement/${id}`}>
            <img src={cover} alt="" className={`${style.cardImg}`} />
            <h3 className={style.titleCard}><span className={`${style.cardTitleTxt}`}>{title}</span></h3>
        </NavLink>
    )
}