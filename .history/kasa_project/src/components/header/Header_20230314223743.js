import image from "../../assets/images/logo_header.png";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header className={`${style.header} d-flex justify-between p-30 align-center`}>
            <div className={`${style.headerIcon}`}>
                <img src={image} alt="logo du site Kasa representant une maison" />
            </div>
            <div className={`${style.headerNav}`}>
                <ul className="d-flex">
                    <li className={`${style.headerItems} m-r-30`}><NavLink classto="/homepage" end> Accueil </NavLink></li>
                    <li className={`${style.headerItems}`}><NavLink to="/apropos">A Propos</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

