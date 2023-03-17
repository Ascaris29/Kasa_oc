import style from "./Footer.module.scss"

export default function Footer(){
    return (
        <footer className={`${style.footer}`}>
            <div className={`${footerLogo} m-b-20`}>
                footer
            </div>
        </footer>
    )
}