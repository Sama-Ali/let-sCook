# Let's Cook

A “What’s in your fridge?” website that allows users to select ingredients and discover matching recipes🥘😋

## Features ✨

- **Ingredient Selection**: Choose ingredients from 7 categories:

  - 🥦 Vegetables
  - 🍎 Fruits
  - 🥩 Meat & Poultry
  - 🐟 Seafood
  - 🥛 Dairy
  - 🍫 Sweets & Baking
  - 🍴 Other

- **Recipe Discovery**: Find up to 10 recipes based on your selected ingredients using the Spoonacular API

- **Recipe Details**: View detailed cooking instructions with step-by-step guides

- **Friendly UI**: Playful design with user-friendly interface

## Screenshots 📲

<img width="1792" height="997" alt="image" src="https://github.com/user-attachments/assets/0c0c6958-d233-471f-83c9-d8ce11745a7f" />

<img width="1792" height="997" alt="image" src="https://github.com/user-attachments/assets/fc43c2c5-e3b9-4a7a-ae71-56e2106b44fe" />

<img width="1792" height="997" alt="image" src="https://github.com/user-attachments/assets/5998afd8-5fb6-4999-a663-74a9cfa4dc07" />

<img width="1792" height="999" alt="image" src="https://github.com/user-attachments/assets/ed65fa4f-dcd9-43f4-9599-3f9f26586bf1" />




## Technologies Used 🛠️

- **React 19** -
- **React Router DOM** -
- **Material-UI (MUI)** -
- **Spoonacular API** - Recipe data and cooking instructions
- **localStorage** - Persistent state management

## Only 3steps 📖

1. **Select Ingredients**:

2. **Find Recipes**:

3. **View Recipe Details**:

## Project Structure 📁

```
lets-cook/
├── public/
├── src/
│   ├── assets/
│   │   └── letsCook.png          # Main app image
│   ├── componemts/
│   │   ├── AppContent.js         # Main ingredient selection & recipe fetching
│   │   ├── RecipesGrid.js        # Recipe grid display component
│   │   └── RecipeDetails.js      # Individual recipe details page
│   ├── contexts/
│   │   └── ingredientsContext.js # Ingredient data context provider
│   ├── App.js                    # Main app component with routing
│   ├── App.css                   # Application styles
│   ├── index.js                  # App entry point
│   └── index.css                 # Global styles
├── package.json
└── README.md
```

## Acknowledgments 🙏

- [Spoonacular](https://spoonacular.com/food-api) for
  - Finding recipes by ingredients (`/recipes/findByIngredients`)
  - Getting detailed recipe information (`/recipes/{id}/information`)
- [Material-UI](https://mui.com) for the component library

---

Happy Cooking! 👨‍🍳👩‍🍳
