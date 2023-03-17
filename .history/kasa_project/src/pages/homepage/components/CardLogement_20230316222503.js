import style from './CardLogement.module.scss';


export default function CardLogement({className, title, cover}){
    return (
        <div className={`${style.card} ${className}`}>
            <img src={cover} alt="" className={} />
            <h3 className={style.titleCard}>{title}</h3>
        </div>
    )
}