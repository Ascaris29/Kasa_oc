import { UrlApiContext } from "../context/UrlApiContext";
import { useContext } from "react";



export default async function FetchApi(){

    try{

    }catch(e){
        
    }

    const UrlApi = useContext(UrlApiContext)

    const response = await fetch(UrlApi);
    const data = await response.json();
    console.log(data)

}