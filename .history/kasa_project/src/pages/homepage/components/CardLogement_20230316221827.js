import style from './CardLogement.module.scss';


export default function CardLogement({className, title, key, id , cover,}){
    return (
        <div className={`${style.card} ${className}`}>
            <h3 className={style.titleCard}>{title}</h3>
        </div>
    )
}