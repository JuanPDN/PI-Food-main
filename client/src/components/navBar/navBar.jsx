import { useSelector } from "react-redux";
import SearchBar from "../searchBar/searchBar";


function NavBar({ handleClick }) {

    const diets = useSelector((state) => state.allDiets)

    return (
        <nav>
            <button onClick={handleClick}>Create recipe</button>
            <select defaultValue='' name="diets" id="diets">
                <option value='' disabled>--Diets--</option>
                {diets?.map(diet =>
                    <option key={diet.id} value={diet.name}>{diet.name}</option>
                )}
            </select>
            <select defaultValue='' name="origin" id="origin">
                <option value='' disabled>--Origin--</option>
                <option value="db">My Recipes</option>
                <option value="api" >Recipes</option>
            </select>
            <SearchBar />
        </nav>
    );
}

export default NavBar;