import style from "./Footer.module.scss";
import image from "../../assets/images/logo_footer.png";

export default function Footer(){
    return (
        <footer className={`${style.footer}`}>
            <div className={`${style.footerLogo} d-flex p-30 flex-column justify-center align-center`}>
                <img src={image} alt="" />
            </div>
            <div className="footerText">
                <p>© 2023 Kasa</p>
            </div>
        </footer>
    )
}