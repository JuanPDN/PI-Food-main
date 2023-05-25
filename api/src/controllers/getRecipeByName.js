require('dotenv').config()
const { default: axios } = require("axios");
const { Op } = require('sequelize')
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

        const dbRecipes = await Recipe.findAll({
            include: {
                model: Diets
            }
        })

        const allRecipes = dataRecipes.concat(dbRecipes)
        if(nameRecipe){
            const filterRecipes = allRecipes.filter(e => e.name.toLowerCase().includes(nameRecipe.toLowerCase()))
            res.status(200).json(filterRecipes)
        }else{
            res.status(200).json(allRecipes)
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeByName