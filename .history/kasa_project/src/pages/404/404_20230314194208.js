import { useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    switch(error.status){
        case "4"
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