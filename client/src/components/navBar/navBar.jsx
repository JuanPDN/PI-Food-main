import SearchBar from "../searchBar/searchBar";


function NavBar() {
    return (
        <nav>
            <select name="diets" id="diets">
                <option value="null" selected disabled>--Diets--</option>
                <option>vegan</option>
                <option>ovo</option>
            </select>
            <select name="origin" id="origin">
                <option value="null" selected disabled>--Origin--</option>
                <option value="db">My Recipes</option>
                <option value="api" >Recipes</option>
            </select>
            <SearchBar />
        </nav>
    );
}

export default NavBar;