# 🍳 Recipe API (Node.js + Express + MongoDB Atlas)

A simple RESTful API for managing recipes — fully deployed on Render.  
Each recipe includes a title, description, ingredients, steps, and timing details.

---

## 🚀 Live API URL
🔗 **Base URL:** [https://recipe-3-kr10.onrender.com](https://recipe-3-kr10.onrender.com)

---

## ⚙️ Endpoints Overview

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/recipes` | Get all recipes |
| `GET` | `/api/recipes/:id` | Get a single recipe by ID |
| `POST` | `/api/recipes` | Create a new recipe |
| `PUT` | `/api/recipes/:id` | Update an existing recipe |
| `DELETE` | `/api/recipes/:id` | Delete a recipe |

---

## 🧩 Example CRUD Operations

### 🔹 1. Create (POST)
**URL:**  

POST https://recipe-3-kr10.onrender.com/api/recipes


**Body (JSON):**
```json
{
  "title": "Chocolate Cake",
  "description": "Rich and moist chocolate cake recipe.",
  "ingredients": [
    { "name": "flour", "quantity": "2 cups" },
    { "name": "cocoa powder", "quantity": "1/2 cup" },
    { "name": "eggs", "quantity": "3" },
    { "name": "sugar", "quantity": "1.5 cups" }
  ],
  "steps": [
    "Preheat the oven to 180°C (350°F).",
    "Mix all dry ingredients together.",
    "Add eggs and mix well until smooth.",
    "Bake for 30 minutes and let it cool."
  ],
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 30,
  "servings": 6
}

Response:
{
  "_id": "YOUR_GENERATED_ID",
  "title": "Chocolate Cake",
  ...
}

🔹 2. Read All (GET)

URL:

GET https://recipe-3-kr10.onrender.com/api/recipes


✅ Response:

{
  "page": 1,
  "limit": 20,
  "total": 3,
  "data": [
    { "_id": "ID1", "title": "Chocolate Cake" },
    { "_id": "ID2", "title": "Fluffy Pancakes" },
    { "_id": "ID3", "title": "Vegetable Pasta" }
  ]
}

🔹 3. Read One (GET by ID)

URL:

GET https://recipe-3-kr10.onrender.com/api/recipes/<_id>


✅ Response:

{
  "_id": "ID1",
  "title": "Chocolate Cake",
  "description": "...",
  "ingredients": [...],
  "steps": [...],
  "createdAt": "2025-10-30T06:29:02.376Z"
}

🔹 4. Update (PUT)

URL:

PUT https://recipe-3-kr10.onrender.com/api/recipes/<_id>


Body (JSON):

{
  "servings": 8,
  "cookTimeMinutes": 35
}


✅ Response:

{
  "_id": "ID1",
  "title": "Chocolate Cake",
  "servings": 8,
  "cookTimeMinutes": 35
}

🔹 5. Delete (DELETE)

URL:

DELETE https://recipe-3-kr10.onrender.com/api/recipes/<_id>


✅ Response:

{ "message": "Recipe removed" }
