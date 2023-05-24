require('dotenv').config()
const { default: axios } = require("axios");
const { Op } = require('sequelize')
const { API_KEY } = process.env
const { Recipe } = require('../db');

const getRecipeByName = async (req, res) => {
    const { nameRecipe } = req.query

    try {
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${nameRecipe}&apiKey=${API_KEY}`)
        const dbResult = await Recipe.findAll({
            where: {
                name: {
                    [Op.like]: `%${nameRecipe}%`
                }
            }
        })
        if (dbResult.length > 0 && data.results.length > 0) {
            res.status(200).json({ dbResult, data })
        } else if (dbResult.length > 0) {
            return res.status(200).json(dbResult)
        } else if (data.results.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(404).send('Recipe not found')
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeByName