import image from "../../assets/images/logo_header.png";
import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header className={`${style.header} d-flex justify-between align-center`}>
            <Link className={`${style.headerIcon}`} to="/">
                <img src={image} alt="logo du site Kasa representant une maison"/>
            </Link>
            <div className={`${style.headerNav}`}>
                <ul className="d-flex">
                    <NavLink 
                    className={`${style.headerItems} m-r-30`}
                    to="/" 
                    end
                    > 
                    Accueil 
                    </NavLink>
                    <NavLink 
                    className={`${style.headerItems}`} 
                    to="/apropos"
                    >
                    A Propos
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}

