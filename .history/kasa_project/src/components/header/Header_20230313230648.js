import image from "../../assets/images/logo_header.png";

export default function Header(){
    return (
        <header>
        <div className="header-icon">
            <img src={image} alt="logo de l'entre" />
        </div>
    </header>
    )
}
