import { useState } from "react";
import { useSelector } from "react-redux";
import { validations } from "./validations";





function Form() {

    const diets = useSelector((state) => state.diets)

    const [recipe, setRecipe] = useState({
        name: '',
        image: '',
        summary: '',
        healtScore: '',
        stepToStep: '',
        diets: []
    })

    const [error, setError] = useState({
        name: '',
        summary: '',
        healtScore: '',
        stepToStep: '',
        diets: []
    })

    const handleChange = (event) => {
        setRecipe({
            ...recipe,
            [event.target.name]: event.target.value
        })
        setError(validations({
            ...recipe,
            [event.target.name]: event.target.value
        }))
    }

    const handleCheckboxChange = (event) => {
        const diet = event.target.value
        const isChecked = event.target.checked
        if (isChecked) {
            setRecipe({
                ...recipe,
                diets: [...recipe.diets, diet]
            })
            setError(validations({
                ...recipe,
                diets: [...recipe.diets, diet]
            }))
        } else {
            setRecipe({
                ...recipe,
                diets: [...recipe.diets.filter((value) => value !== diet)]
            })
            setError(validations({
                ...recipe,
                diets: [...recipe.diets.filter((value) => value !== diet)]
            }))
        }
    }

    return (
        <div>
            <form>
                <legend>Your recipe</legend>

                <label for='name'>Name</label>
                <input name='name' type="text" onChange={handleChange} value={recipe.name} />
                {error.name ? <p>{error.name}</p> : null}

                <label for='imageUpload'>Image</label>
                <input type="text" placeholder="URL de la imagen" name="imageUpload" onChange={handleChange} accept="image/*" />

                <label for='summary'>Summary</label>
                <textarea name="summary" id="summary" onChange={handleChange} cols="30" rows="10" value={recipe.summary}></textarea>
                {error.summary ? <p>{error.summary}</p> : null}

                <label for='healtScore'>healt Score</label>
                <input name="healtScore" onChange={handleChange} type="number" min='0' value={recipe.healtScore} />
                {error.score ? <p>{error.score}</p> : null}

                <label for="stepToStep">Step to Step</label>
                <textarea name="stepToStep" onChange={handleChange} id="stepToStep" cols="30" rows="10" value={recipe.stepToStep}></textarea>
                {error.stepToStep ? <p>{error.stepToStep}</p> : null}


                <legend>Diets</legend>
                {diets?.map(diet =>
                    <div key={diet.id}>
                        <label for='diets'>{diet.name}</label>
                        <input type="checkbox" name='diets' onChange={handleCheckboxChange} value={diet.name} />
                    </div>
                )}
                {error.chose ? <p>{error.chose}</p> : null}

                <button disabled={!Object.keys(error).length ? false : true} >Crear</button>


            </form>
        </div>
    );
}

export default Form;