const { default: axios } = require("axios");
require('dotenv').config()
const { API_KEY } = process.env

const getRecipeByName = async (req, res) => {
    const { name } = req.query
    try {
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY}`)
        if(data.results.length === 0){
            return res.status(404).send('Recipe not found')
        }
        res.status(200).send(data)
    } catch (error) {
       res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipeByName