import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar/searchBar";
import { filterOrigin, filterRecipes, orderByName } from "../../redux/actions";
import { useState } from "react";


function NavBar({ handleClick }) {

    const [orderName, setOrderName] = useState(true)
    const [orderScore, setOrderScore] = useState (true)

    const diets = useSelector((state) => state.allDiets)
    const dispatch = useDispatch()

    const handleFilterRecipes = (event) => {
        const diet = event.target.value
        dispatch(filterRecipes(diet))
    }

    const handleFilterOrigin = (event) => {
        const origin = event.target.value
        dispatch(filterOrigin(origin))
    }

    const handleOrder = () => {
        setOrderName(!orderName)
        dispatch(orderByName(orderName))
    }

    const handleOrderScore = () => {
        setOrderScore(!orderScore)
        dispatch(orderByName(orderScore))
    }

    return (
        <nav>
            <button onClick={handleClick}>Create recipe</button>
            <select onChange={handleFilterRecipes} defaultValue='' name="diets" id="diets">
                <option value='' disabled>--Diets--</option>
                {diets?.map(diet =>
                    <option key={diet.id} value={diet.name}>{diet.name}</option>
                )}
            </select>

            <select onChange={handleFilterOrigin} defaultValue='' name="origin" id="origin">
                <option value='' disabled>--Origin--</option>
                <option value="db">My Recipes</option>
                <option value="api" >Recipes</option>
            </select>

            <button onClick={handleOrder}>Order By Name</button>

            <button onClick={handleOrderScore}>Order By Score</button>

            <SearchBar />

        </nav>
    );
}

export default NavBar;