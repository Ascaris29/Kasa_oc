import image from "../../assets/images/logo_header.png";

export default function Header(){
    return (
        <header>
            <div className="header-icon d-flex">
                <img src={image} alt="logo du site Kasa representant une maison" />
            </div>
        </header>
    )
}

