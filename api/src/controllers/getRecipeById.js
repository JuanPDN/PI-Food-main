const axios = require('axios')
require('dotenv').config()
const { API_KEY } = process.env
const { Recipe } = require('../db');


const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params

    try {
        const { data } = await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&addRecipeInformation=true`)
        const recipe = {
            id: data.id,
            name: data.title,
            image: data.image,
            summary: data.summary,
            healthScore: data.healthScore,
            stepToStep: data.analyzedInstructions[0].steps,
            diets: data.diets
        }
        
        const recipeDb = await Recipe.findAll({
            where: {
                id: idRecipe
            }
        })
        if (recipeDb.length === 0) {
            res.status(200).json(recipe)
        } else {
            res.status(200).json({ recipe, recipeDb })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeById