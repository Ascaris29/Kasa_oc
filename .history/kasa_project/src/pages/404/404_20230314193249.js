import { useRouteError } from "react-router-dom";
import Header from "../../components/header/Header";

export default function Error404(){
    const error = useRouteError()
    return (
        <Header />

    )
}