import styles from './cards.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Card from "../card/card";
import { changePage } from "../../redux/actions";

function Cards(props) {

    const currentPage = useSelector((state) => state.currentPage)
    const dispatch = useDispatch()


    const recipes = props.recipe

    const itemsPerPage = 9;
    const totalPages = Math.ceil(recipes.length / itemsPerPage);


    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage


    const prevPage = () => {
        dispatch(changePage(-1))
    }


    const nextPage = () => {
        dispatch(changePage(1))
    }


    return (
        <div className={styles['card-container']}>
            {
                recipes.slice(startIndex, endIndex).map((recipe) =>
                    <Card
                        id={recipe.id}
                        key={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diets={recipe.diets}
                    />
                )
            }
            <div className={styles.paginado}>
                <button className={styles['btn-green']} onClick={prevPage} disabled={currentPage === 1}>Prev</button>{currentPage} de {totalPages}
                <button className={styles['btn-green']} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default Cards;