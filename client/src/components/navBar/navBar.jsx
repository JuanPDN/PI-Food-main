import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar/searchBar";
import { filterOrigin, filterRecipes, orderBy } from "../../redux/actions";


function NavBar({ handleClick }) {

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

    const handleOrder = (event) => {
        const order = event.target.value
        dispatch(orderBy(order))
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
            <select onChange={handleOrder} defaultValue='' name="order" id="order">
                <option value='' disabled >--order by--</option>
                <option value="A">Ascendent</option>
                <option value="D">Descendent</option>
            </select>
            <SearchBar />
        </nav>
    );
}

export default NavBar;