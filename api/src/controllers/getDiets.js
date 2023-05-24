require('dotenv').config()
const { default: axios } = require("axios");
const { Diets } = require('../db');
const { API_KEY } = process.env

const getDiet = async (req, res) => {
    const diets = await Diets.findAll()
    if (diets.length === 0) {
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
        const result = Object.keys(data.results[0]).slice(0, 9)
        const aux = []
        result.map(e => {
            aux.push({ name: e })
        })
        const listdiets = await Diets.bulkCreate(aux)

        res.status(200).json(listdiets)
    }

}

module.exports = getDiet