import style from './CardLogement.module.scss';
import { NavLink } from "react-router-dom";


export default function CardLogement({className, title, cover}){
    return (
        <NavLink className={`${style.card} ${className}`} to="/logement">
            <img src={cover} alt="" className={`${style.cardImg}`} />
            <h3 className={style.titleCard}><span className={`${style.cardTitleTxt}`}>{title}</span></h3>
        </Navlink>
    )
}