import style from "./Tags.module.scss";


export default function Tags(){
    return (
        <div className={`${style.TagName} d-flex`}>
                            <p>Cosy</p>
                            <p>Canal</p>
                            <p>Paris 10</p>
        </div>
    )
}