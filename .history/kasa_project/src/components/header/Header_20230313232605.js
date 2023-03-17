import image from "../../assets/images/logo_header.png";
import style from "./Header.module.scss";

export default function Header(){
    return (
        <header className={`${style.header} d-flex justify-between p-30`}>
            <div className={`header-icon`}>
                <img src={image} alt="logo du site Kasa representant une maison" />
            </div>
            <div className="header-nav">
                <ul className="d-flex">
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </div>
        </header>
    )
}

