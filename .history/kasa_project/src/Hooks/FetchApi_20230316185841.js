import { UrlApiContext } from "../context/UrlApiContext";
import { useContext } from "react";



export default async function FetchApi(){

    try{
        const UrlApi = useContext(UrlApiContext)
        const response = await fetch(UrlApi);
        const data = await response.json();
        console.log(data)
    }catch(e){

    }

    

}