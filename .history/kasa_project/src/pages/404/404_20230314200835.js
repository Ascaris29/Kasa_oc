import { useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    const status = error.status;

    function gestionErreur(){
        if(status === 404){
            return <p className="d-flex flex-column justify-center align-center">Oups! La page que vous demandez n'existe pas.</p>
        }
        if(status === 401){
            return <p className="d-flex flex-column justify-center align-center"> Désolé, vous n'êtes pas autorisé à acceder à cette page.</p>
        }
    }
    
    
    
    return (
        <div className={style.error}>
            <Header />
                <div className={`${style.errorStatus} flex-fill d-flex justify-center align-center`}>
                    {status}
                </div>
                
                   
            <Footer />
        </div>
    )
}