import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";

function SearchBar() {

    const dispatch = useDispatch()

    const [nameRecipe, setNameRecipe] = useState([])

    const handleChange = (event) => {
        setNameRecipe([
            event.target.value
        ])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getRecipe(nameRecipe))
    }

    const handleEnter = (event)=>{
        event.preventDefault()
        if(event.keyCode === 13){
            dispatch(getRecipe(nameRecipe)) 
        }
    }

    return (
        <div>
            <input type="search" placeholder="Search recipe" onKeyUp={handleEnter} onChange={handleChange} value={nameRecipe} />
            <button onClick={handleSubmit} type="input">Search</button>
        </div>
    );
}

export default SearchBar;