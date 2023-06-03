//import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Card from "../card/card";
import { changePage } from "../../redux/actions";

function Cards(props) {
    //const [currentPage, setCurrentPage] = useState(1);

    const currentPage = useSelector((state)=> state.currentPage)
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
        <div>
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
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>{currentPage} de {totalPages}
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
}

export default Cards;