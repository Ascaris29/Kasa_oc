import style from "./Footer.module.scss"

export default function Footer(){
    return (
        <footer className={`${style.footer}`}>
            <div className={`${style.footerLogo} d-flex p-30 flex-column justify-center align-center`}>
                <img src=" alt="" />
            </div>
        </footer>
    )
}