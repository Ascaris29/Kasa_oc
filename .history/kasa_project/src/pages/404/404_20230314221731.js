import { Link, useRouteError } from "react-router-dom";
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
        <div className={`${style.error}`}>
            <Header />
                <div className="flex-fill d-flex flex-column justify-center align-center">
                    <div className={`${style.errorStatus} `}>
                        {status}  
                    </div>
                    <span className={`${style.errorTxt}`}>{gestionErreur()}</span>
                    <Link className="" to="/homepage">
                    </Link>
                </div>   
            <Footer />
        </div>
    )
}