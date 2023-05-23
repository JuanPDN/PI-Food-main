const { Router } = require('express');
// Importar todos los routers;

const { Diets, Recipe } = require('../db');
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByName = require('../controllers/getRecipeByName')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe', getRecipeById)
router.get('/recipes/',getRecipeByName)



module.exports = router;
