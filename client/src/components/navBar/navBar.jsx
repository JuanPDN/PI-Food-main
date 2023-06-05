import styles from './navBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar/searchBar";
import { filterOrigin, filterRecipes, orderByName, orderByScore } from "../../redux/actions";
import { useState } from "react";


function NavBar({ handleClick }) {

    const [orderName, setOrderName] = useState(true)
    const [orderScore, setOrderScore] = useState(true)

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
        dispatch(orderByScore(orderScore))
    }

    return (
        <nav>
            <SearchBar />

            <select onChange={handleFilterRecipes} defaultValue='' name="diets" id="diets">
                <option value='' disabled>--Diets--</option>
                <option value='all' >All recipes</option>
                {diets?.map(diet =>
                    <option key={diet.id} value={diet.name}>{diet.name}</option>
                )}
            </select>

            <select onChange={handleFilterOrigin} defaultValue='' name="origin" id="origin">
                <option value='' disabled>--Origin--</option>
                <option value='all' >All recipes</option>
                <option value="db">My Recipes</option>
                <option value="api" >Recipes</option>
            </select>

            <button className={styles['btn-green']} onClick={handleOrder}>Order By Name</button>

            <button className={styles['btn-green']} onClick={handleOrderScore}>Order By Score</button>

            <button className={styles['btn-green']} onClick={handleClick}>Create recipe</button>
        </nav>
    );
}

export default NavBar;