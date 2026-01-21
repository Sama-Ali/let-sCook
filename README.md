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
