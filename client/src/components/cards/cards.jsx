import { useState } from "react";
import Card from "../card/card";

function Cards(props) {
    const recipes = props.recipe
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(recipes.length / itemsPerPage);


    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }


    const nextPage = () => {
        setCurrentPage(currentPage + 1)
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