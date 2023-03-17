import style from "./Tags.module.scss";


export default function Tags(text){
    return (
        <div className={`${style.Tag} d-flex`}>
                            <p>Cosy</p>
                            <p>Canal</p>
                            <p>Paris 10</p>
        </div>
    )
}