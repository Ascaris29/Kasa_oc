import { useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    const status = error.status;

    if(status == "40")
    
    
    return (
        <div className={style.error}>
            <Header />
                <div className={`${style.errorStatus} flex-fill d-flex justify-center align-center`}>
                    {status}
                </div>
                <div>
                   {gestionErreur(status)}
                </div>
            <Footer />
        </div>
    )
}