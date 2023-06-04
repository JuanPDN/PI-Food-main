import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validations } from "./validations";
import { getRecipes } from "../../redux/actions";

function Form({ handleClick, postRecipe }) {

    const allDiets = useSelector((state) => state.diets)
    const dispatch = useDispatch()

    const [recipe, setRecipe] = useState({
        name: '',
        summary: '',
        healthScore: '',
        stepToStep: [],
        diets: []
    })

    const [error, setError] = useState({
        name: '',
        summary: '',
        healthScore: '',
        stepToStep: [],
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
        const selectedDiets = event.target.value
        const isChecked = event.target.checked
        if (isChecked) {
            setRecipe({
                ...recipe,
                diets: [...recipe.diets, selectedDiets]
            })
            setError(validations({
                ...recipe,
                diets: [...recipe.diets, selectedDiets]
            }))
        } else {
            setRecipe({
                ...recipe,
                diets: [...recipe.diets.filter((value) => value !== selectedDiets)]
            })
            setError(validations({
                ...recipe,
                diets: [...recipe.diets.filter((value) => value !== selectedDiets)]
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postRecipe(recipe)
        setRecipe({
            name: '',
            summary: '',
            healthScore: '',
            stepToStep: [],
            diets: []
        })
        setError({
            name: '',
            summary: '',
            healthScore: '',
            stepToStep: [],
            diets: []
        })
        dispatch(getRecipes())
    }

    return (
        <div>
            <form>
                <button onClick={handleClick}>X</button>
                <legend>Your recipe</legend>

                <label htmlFor='name'>Name</label>
                <input name='name' type="text" onChange={handleChange} value={recipe.name} />
                {error.name ? <p>{error.name}</p> : null}

                <label htmlFor='imageUpload'>Image</label>
                <input type="text" placeholder="URL de la imagen" name="imageUpload" onChange={handleChange} accept="image/*" />

                <label htmlFor='summary'>Summary</label>
                <textarea name="summary" id="summary" onChange={handleChange} cols="30" rows="10" value={recipe.summary}></textarea>
                {error.summary ? <p>{error.summary}</p> : null}

                <label htmlFor='healthScore'>health Score</label>
                <input name="healthScore" onChange={handleChange} type="number" min='0' value={recipe.healthScore} />
                {error.score ? <p>{error.score}</p> : null}

                <label htmlFor="stepToStep">Step to Step</label>
                <textarea name="stepToStep" onChange={handleChange} id="stepToStep" cols="30" rows="10" value={recipe.stepToStep}></textarea>
                {error.stepToStep ? <p>{error.stepToStep}</p> : null}


                <legend>Diets</legend>
                {allDiets?.map(diet =>
                    <div key={diet.id}>
                        <label htmlFor='diets'>{diet.name}</label>
                        <input type="checkbox" name='diets' onChange={handleCheckboxChange} value={diet.name} />
                    </div>
                )}
                {error.chose ? <p>{error.chose}</p> : null}

                <button onClick={handleSubmit} disabled={!Object.keys(error).length ? false : true} >Crear</button>


            </form>
        </div>
    );
}

export default Form;