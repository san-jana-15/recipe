// models/Recipe.js
const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  quantity: { type: String, required: true, trim: true } // e.g., "2 cups"
});

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Recipe title is required'],
    trim: true,
    minlength: [2, 'Title should be at least 2 characters']
  },
  description: { type: String, trim: true, default: '' },
  ingredients: {
    type: [IngredientSchema],
    validate: {
      validator: (arr) => Array.isArray(arr) && arr.length > 0,
      message: 'At least one ingredient is required'
    }
  },
  steps: {
    type: [String],
    validate: {
      validator: (arr) => Array.isArray(arr) && arr.length > 0,
      message: 'At least one step is required'
    }
  },
  prepTimeMinutes: { type: Number, min: 0, default: 0 },
  cookTimeMinutes: { type: Number, min: 0, default: 0 },
  servings: { type: Number, min: 1, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
