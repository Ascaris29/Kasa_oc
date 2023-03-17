import { useRouteError } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./404.module.scss";

export default function Error404(){
    const error = useRouteError();
    console.log(error)
    return (
        <div className={style.error}>
        <Header />
            <div className={`${style.errorTxt} flex-fill`}>
                {}
            </div>
        <Footer />
        </div>
    )
}