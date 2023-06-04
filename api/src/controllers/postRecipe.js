const { Recipe, Diets } = require('../db');
require('dotenv').config()

const postRecipe = async (req, res) => {
    const { name, image, summary, healthScore, stepToStep, diets } = req.body
    if (!diets) {
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
            stepToStep
        })

        const dietsLis = await Diets.findAll({
            where:{
                name:diets
            }
        })

        await newRecipe.addDiets(dietsLis)

        
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = postRecipe