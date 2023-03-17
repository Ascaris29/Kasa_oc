import { UrlApiContext } from "../context/UrlApiContext";
import { useContext } from "react";



export default async function FetchApi(){

    try{
        const UrlApi = useContext(UrlApiContext);
        console.log()
        const response = await fetch(UrlApi);
        if(response.ok){
            const data = await response.json();
            console.log(data);
        }
    }catch(e){
        console.log("erreur");
    }

    

}