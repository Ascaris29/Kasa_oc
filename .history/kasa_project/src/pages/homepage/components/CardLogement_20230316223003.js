import style from './CardLogement.module.scss';


export default function CardLogement({className, title, cover}){
    return (
        <div className={`${style.card} ${className}`}>
            <img src={cover} alt="" className={`${style.cardImg}`} />
            <h3 className={style.titleCard}><span className={``}>{title}</span></h3>
        </div>
    )
}