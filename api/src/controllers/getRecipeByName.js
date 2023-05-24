require('dotenv').config()
const { default: axios } = require("axios");
const { Op } = require('sequelize')
const { API_KEY } = process.env
const { Recipe } = require('../db');

const getRecipeByName = async (req, res) => {
    const { nameRecipe } = req.query

    try {
        if (!nameRecipe) {
            const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
            const result = []
            data.results.forEach(element => {
                result.push({
                    id:element.id,
                    name: element.title,
                    image: element.image,
                    diets: element.diets
                })
            });

            return res.status(200).json(result)
        }
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${nameRecipe}&apiKey=${API_KEY}`)
        const dbResult = await Recipe.findAll({
            where: {
                name: {
                    [Op.like]: `%${nameRecipe}%`
                }
            }
        })
        const diets = {}
        if (dbResult.length > 0 && data.results.length > 0) {
            diets = { dbResult, data }
        } else if (dbResult.length > 0) {
            diets = dbResult
        } else if (data.results.length > 0) {
            diets = data
        } else {
            return res.status(404).send('Recipe not found')
        }
        res.status(200).json(diets)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeByName