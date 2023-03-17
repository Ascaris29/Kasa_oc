import style from './Card.module.scss';


export default function Card(className, title){
    return (
        <>
        <div className={`${style.card} ${className}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        </>
        
    )
}