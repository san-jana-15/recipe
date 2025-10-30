// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { createRecipeValidation, updateRecipeValidation } = require('../validators/recipeValidator');
const { check } = require('express-validator');

// CRUD endpoints
router.post('/', createRecipeValidation, recipeController.createRecipe);          // Create
router.get('/', recipeController.getAllRecipes);                                 // Read all
router.get('/:id', recipeController.getRecipeById);                              // Read one
router.put('/:id', updateRecipeValidation, recipeController.updateRecipe);       // Update
router.delete('/:id', recipeController.deleteRecipe);                            // Delete

module.exports = router;
