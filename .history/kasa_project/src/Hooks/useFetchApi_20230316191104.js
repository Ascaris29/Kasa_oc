import { UrlApiContext } from "../context/UrlApiContext";
import { useContext } from "react";



export default async function UseFetchApi(){
    const [data , setData] = useSta
    const UrlApi = useContext(UrlApiContext);
    try{
        const response = await fetch(UrlApi);
        if(response.ok){
            const data = await response.json();
            console.log(data);
        }
    }catch(e){
        console.log("erreur");
    }
    return [data];
}