const { Router } = require('express');
// Importar todos los routers;

const { Diets, Recipe } = require('../db');
const getRecipe = require('../controllers/getRecipe');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe', getRecipe)



module.exports = router;
