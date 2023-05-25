require('dotenv').config()
const { default: axios } = require("axios");
const { Diets } = require('../db');
const { API_KEY } = process.env

const postDiet = async () => {
    try {
        const aux = []
        const { data } = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
        const diets = data.results.map(e => e.diets)
        for (let i = 0; i < diets.length; i++) {
            for (let j = 0; j < diets[i].length; j++) {
                if (!aux.includes(diets[i][j])) {
                    aux.push(diets[i][j])
                }
            }
        }
        await Diets.bulkCreate(aux.map(e => {
            return {
                name: e
            }
        }))
        console.log("Carga Completa");

    } catch (error) {
        return (error.message)
    }
}

const getDiet = async (req, res)=>{
    try {
        const dietsDb = await Diets.findAll()
        res.status(200).json(dietsDb)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    postDiet,
    getDiet
}