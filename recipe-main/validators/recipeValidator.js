// validators/recipeValidator.js
const { body } = require('express-validator');

const ingredientValidator = body('ingredients').isArray({ min: 1 }).withMessage('ingredients must be a non-empty array')
  .bail()
  .custom((ingredients) => {
    for (const ing of ingredients) {
      if (!ing.name || !ing.quantity) {
        throw new Error('Each ingredient requires name and quantity');
      }
    }
    return true;
  });

const stepsValidator = body('steps').isArray({ min: 1 }).withMessage('steps must be a non-empty array');

const createRecipeValidation = [
  body('title').isString().trim().isLength({ min: 2 }).withMessage('title must be at least 2 characters'),
  ingredientValidator,
  stepsValidator,
  body('prepTimeMinutes').optional().isInt({ min: 0 }).withMessage('prepTimeMinutes must be a non-negative integer'),
  body('cookTimeMinutes').optional().isInt({ min: 0 }).withMessage('cookTimeMinutes must be a non-negative integer'),
  body('servings').optional().isInt({ min: 1 }).withMessage('servings must be >= 1')
];

const updateRecipeValidation = [
  body('title').optional().isString().trim().isLength({ min: 2 }).withMessage('title must be at least 2 characters'),
  body('ingredients').optional().isArray().bail().custom((ingredients) => {
    for (const ing of ingredients) {
      if (!ing.name || !ing.quantity) throw new Error('Each ingredient requires name and quantity');
    }
    return true;
  }),
  body('steps').optional().isArray().withMessage('steps must be an array'),
  body('prepTimeMinutes').optional().isInt({ min: 0 }),
  body('cookTimeMinutes').optional().isInt({ min: 0 }),
  body('servings').optional().isInt({ min: 1 })
];

module.exports = { createRecipeValidation, updateRecipeValidation };
