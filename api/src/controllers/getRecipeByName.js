const { default: axios } = require("axios");
const { Op } = require('sequelize')
const { API_KEY } = process.env
const { Recipe } = require('../db');
require('dotenv').config()

const getRecipeByName = async (req, res) => {
    const { name } = req.query

    try {
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY}`)
        const dbResult = Recipe.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        if (data.results.length === 0 || dbResult.length === 0) {
            return res.status(404).send('Recipe not found')
        }
        res.status(200).json({ data, dbResult })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeByName