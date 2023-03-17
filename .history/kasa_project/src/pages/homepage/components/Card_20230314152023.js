import style from './Card.module.scss';


export default function Card(){
    return (
    <div className={`${style.card}`}>
        <h3>Titre de la location</h3>
    </div>
    )
}