import style from "./Footer.module.scss"

export default function Footer(){
    return (
        <footer className={`${style.footer}`}>
            <div className={`${style.footerLogo} d-flex `}>
                footer
            </div>
        </footer>
    )
}