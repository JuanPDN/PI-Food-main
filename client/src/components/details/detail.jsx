import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';


function Details() {

    const [recipe, setRecipe] = useState([])
    const { id } = useParams()

    const Recipes = async (id) => {
        try {
            const listRecipes = await axios.get(`http://localhost:3001/recipes/${id}`)
            setRecipe(listRecipes.data)
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        Recipes(id)
    },[id])

    const { name, image, summary, healthScore, stepToStep } = recipe


    return (
        <div key={id}>
            <h2>{name}</h2>
            <p> health Score: {healthScore}</p>
            <img src={image} alt="" />
            <p>{ReactHtmlParser(summary)}</p>
            {
                stepToStep?.map((steps) => {
                    return (
                        <div>
                            <h3>Satep: {steps.number}</h3>
                            <p>{steps.step}</p>
                        </div>
                    )
                })
            }
        </div>);
}

export default Details;