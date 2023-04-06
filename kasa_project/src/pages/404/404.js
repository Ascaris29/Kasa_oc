import { Link, useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    const status = error.status;

      
    return (
        <div className={`${style.error}`}>
            <Header />
                <div className="flex-fill d-flex flex-column justify-center align-center">
                    <div className={`${style.errorStatus} `}>
                        {status}  
                    </div>
                    <span className={`${style.errorTxt}`}><p className="d-flex flex-column justify-center align-center">Oups! La page que vous demandez n'existe pas.</p></span>
                    <Link className={`${style.linkError}`} to="/"> Retourner sur la page d'accueil</Link>
                </div>   
            <Footer />
        </div>
    )
}