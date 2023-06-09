import styles from './card.module.css'
import { Link } from "react-router-dom";

function Card(props) {

    const { id, name, image, diets } = props

    return (
        <Link to={`/detail/${id}`}>
            <div className={styles.card}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <ul>
                    {diets.map((diet,index) =>
                        <li key={index}>{diet}</li>
                    )}
                </ul>
            </div>
        </Link>
    );
}

export default Card;