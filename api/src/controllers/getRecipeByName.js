require('dotenv').config()
const { default: axios } = require("axios");
const { API_KEY } = process.env
const { Recipe, Diets } = require('../db');

const getRecipeByName = async (req, res) => {
    const { nameRecipe } = req.query

    try {
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)
        const dataRecipes = data.results.map(element => {
            return {
                id: element.id,
                name: element.title,
                image: element.image,
                summary: element.summary,
                healthScore: element.healthScore,
                stepToStep: element.analyzedInstructions[0]?.steps,   
                diets: element.diets
            }
        })

        const db = await Recipe.findAll({
            include: {
                model: Diets,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })

        const dbRecipes = db.map(ele => {
            const diets = ele.diets.map(diet => diet.name)
            return {
                id: ele.id,
                name: ele.name,
                image:ele.image,
                summary: ele.summary,
                healthScore: ele.healthScore,
                stepToStep: ele.stepToStep,
                diets: diets
            }
        })
        const allRecipes = dataRecipes.concat(dbRecipes)
        if (nameRecipe) {
            const filterRecipes = allRecipes.filter(e => e.name.toLowerCase().includes(nameRecipe.toLowerCase()))
            res.status(200).json(filterRecipes)
        } else {
        res.status(200).json(allRecipes)
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeByName