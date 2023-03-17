import { useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    const status = error.status;
    switch(error.status){
        case "404" : <p>Oops, aucune page comme celle ci n'existe sur ce site</p> ;
        break;
        case "401" : <p>Désolé, vous n'êtes pas autorisés à acceder à cette page !</p>;
        break;
        default : <p>Une erreur a été detectée</p>
    }
    return (
        <div className={style.error}>
        <Header />
            <div className={`${style.errorStatus} flex-fill`}>
                {error.status}
            </div>
            <div>
                
            </div>
        <Footer />
        </div>
    )
}