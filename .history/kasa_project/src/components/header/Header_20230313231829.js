import image from "../../assets/images/logo_header.png";

export default function Header(){
    return (
        <header className="d-flex justify-between">
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
