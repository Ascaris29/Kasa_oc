import style from './Card.module.scss';


export default function Card(){
    return (
    <div className={`${style.homepageCard} `}>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3 className={style.titleCard}>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
        <div className={`${style.card}`}>
            <h3>Titre de la location</h3>
        </div>
    </div>
    )
}