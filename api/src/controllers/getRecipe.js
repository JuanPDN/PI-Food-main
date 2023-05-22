const axios = require('axios')
require('dotenv').config()
const { API_KEY } = process.env


const getRecipe = async (req, res) => {
    const { idRecipe } = req.params
    try {
        const { data } = await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&addRecipeInformation=true`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getRecipe