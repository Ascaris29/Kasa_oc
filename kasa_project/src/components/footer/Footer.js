import style from "./Footer.module.scss";
import image from "../../assets/images/logo_footer.png";

export default function Footer(){
    return (
        <footer className={`${style.footer} d-flex p-t-50 flex-column justify-center align-center`}>
            <div className={`${style.footerLogo} `}>
                <img src={image} alt="" />
            </div>
            <div className="footerText">
                <p>© 2023 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}