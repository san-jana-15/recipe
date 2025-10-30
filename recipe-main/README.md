# Recipe App (Node + Express + Mongoose)

## Overview
A simple RESTful API for CRUD operations on recipes using Node.js, Express, and MongoDB (Mongoose). Follows MVC.

## Setup
1. Clone repo
2. `npm install`
3. Copy `.env.example` to `.env` and set `MONGO_URI` and `PORT` if needed
4. `npm run dev` (requires nodemon) or `npm start`

## API Endpoints
Base URL: `http://localhost:5000/api/recipes`

- `POST /` Create a new recipe
- `GET /` Get all recipes (supports `page`, `limit`, `q` (title search))
- `GET /:id` Get a recipe by id
- `PUT /:id` Update a recipe
- `DELETE /:id` Delete a recipe

See `Postman Examples` (below) for request bodies & responses.

## Validation
Uses `express-validator`. Title, ingredients (array of `{name, quantity}`) and steps (array of strings) required.

## Error handling
Centralized express error middleware returns JSON with `message` and stack (only in non-production).

## Notes
- Add authentication later if needed.
- Extend model with images, categories, and ratings as desired.
