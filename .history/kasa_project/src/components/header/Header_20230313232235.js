import image from "../../assets/images/logo_header.png";
import style

export default function Header(){
    return (
        <header className="header d-flex justify-between">
            <div className="header-icon">
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

