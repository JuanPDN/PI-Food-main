const { Recipe, Diets } = require('../db');
require('dotenv').config()

const postRecipe = async (req, res) => {
    const { name, image, summary, healthScore, stepToStep, diet } = req.body
    if (!diet) {
        return res.status(500).send('es necesario incluir la dieta')
    }
    try {
        const recipe = await Recipe.findOne({
            where: {
                name
            }
        })
        if (recipe) {
            return res.status(400).send('receta ya creada')
        }
        const newRecipe = await Recipe.create({
            name,
            image,
            summary,
            healthScore,
            stepToStep,
            diet,
            includes:{
                model:{
                    Diets
                }
            }
        })
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = postRecipe