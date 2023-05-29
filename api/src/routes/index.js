const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByName = require('../controllers/getRecipeByName')
const postRecipe = require('../controllers/postRecipe');
const { getDiet } = require('../controllers/getDiets');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:id', getRecipeById)
router.get('/recipes', getRecipeByName)
router.post('/recipes', postRecipe)
router.get('/diet', getDiet)



module.exports = router;
