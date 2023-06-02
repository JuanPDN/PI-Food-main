import { useState } from "react";
import { useSelector } from "react-redux";





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
        setError({
            ...recipe,
            [event.target.name]: event.target.value
        })
    }

    const handleCheckboxChange = (event) =>{
        const diet = event.target.value
        const isChecked = event.target.checked
        if (isChecked){
            setRecipe({
                ...recipe,
                diets:[...recipe.diets,diet]
            })
        }else{
            setRecipe({
                ...recipe,
                diets:[...recipe.diets.filter((value)=> value !== diet)]
            })
        }
    }




    return (
        <div>
            <form>
                <legend>Your recipe</legend>

                <label for='name'>Name</label>
                <input name='name' type="text" onChange={handleChange} value={recipe.name} />

                <label for='imageUpload'>Image</label>
                <input type="text" placeholder="URL de la imagen" name="imageUpload" onChange={handleChange} accept="image/*" />

                <label for='summary'>Summary</label>
                <textarea name="summary" id="summary" onChange={handleChange} cols="30" rows="10" value={recipe.summary}></textarea>

                <label for='healtScore'>healt Score</label>
                <input name="healtScore" onChange={handleChange} type="number" min='0' value={recipe.healtScore} />

                <label for="stepToStep">Step to Step</label>
                <textarea name="stepToStep" onChange={handleChange} id="stepToStep" cols="30" rows="10" value={recipe.stepToStep}></textarea>

                
                <legend>Diets</legend>
                {diets?.map(diet =>
                    <div key={diet.id}>
                        <label for='diets'>{diet.name}</label>
                        <input type="checkbox" name='diets' onChange={handleCheckboxChange} value={diet.name} />
                    </div>
                )}
                

                <button>Crear</button>
            </form>
        </div>
    );
}

export default Form;