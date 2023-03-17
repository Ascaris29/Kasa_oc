import { useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    const status = error.status;

    const gestionErreur = (status) => {
        switch(status){
            case "404" : console.log("cas 1") ;
            break;
            case "401" : console.log("cas 2");
            break;
            default : <p>Une erreur a été detectée</p>
        }
    }
    
    
    return (
        <div className={style.error}>
            <Header />
                <div className={`${style.errorStatus} flex-fill d-flex justify-center align-center`}>
                    {status}
                </div>
                <div>
                   { gestionErreur(status)}
                </div>
            <Footer />
        </div>
    )
}