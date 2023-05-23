const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Diets, Recipe } = require('../db');
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByName = require('../controllers/getRecipeByName')
const postRecipe = require('../controllers/postRecipe')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe', getRecipeById)
router.get('/recipes',getRecipeByName)
router.post('/recipes',postRecipe)



module.exports = router;
