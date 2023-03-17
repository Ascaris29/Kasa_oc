import style from './Card.module.scss';


export default function CardLogement({className, title}){
    return (
        <div className={`${style.card} ${className}`}>
            <h3 className={style.titleCard}>{title}</h3>
        </div>
    )
}