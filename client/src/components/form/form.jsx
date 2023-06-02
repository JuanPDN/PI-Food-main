import { useState } from "react";



function Form() {

    const [recipe, setRecipe] = useState({
        name: '',
        image: '',
        summary: '',
        healtScore: '',
        stepToStep: '',
        diets: ''
    })

    const [error, setError] = useState({
        name: '',
        summary: '',
        healtScore: '',
        stepToStep: '',
        diets: ''
    })

    const handleChange = (event) => {
        setRecipe({
            ...recipe,
            [event.target.name]:event.target.value
        })
        setError({
            ...recipe,
            [event.target.name]:event.target.value
        })
    }

    


    return (
        <div>
            <form>
                <legend>Your recipe</legend>

                <label for='name'>Name</label>
                <input name='name' type="text" onChange={handleChange} value={recipe.name}/>

                <label for='imageUpload'>Image</label>
                <input type="file" name="imageUpload" accept="image/*"/>

                <label for='summary'>Summary</label>
                <textarea name="summary" id="summary" onChange={handleChange} cols="30" rows="10" value={recipe.summary}></textarea>

                <label for='healtScore'>healt Score</label>
                <input name="healtScore" onChange={handleChange} type="number" min='0' value={recipe.healtScore}/>

                <label for="stepToStep">Step to Step</label>
                <textarea name="stepToStep" onChange={handleChange} id="stepToStep" cols="30" rows="10" value={recipe.stepToStep}></textarea>

                <label for="checkbox">Diets</label>
                <input type="checkbox" id="checkbox" name="diets" value="1"></input>

                <button>Crear</button>
            </form>
        </div>
    );
}

export default Form;