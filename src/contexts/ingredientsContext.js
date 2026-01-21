import { createContext, useState } from "react";

export const IngredientsContext = createContext();

const ingredients = {
  vegetables: {
    title: "Vegetables",
    options: [
      "Tomatoes",
      "Onions",
      "Garlic",
      "Pepper",
      "Lettuce",
      "Cabbage",
      "Broccoli",
      "Carrot",
      "Potato",
      "Parsley",
      "Mint",
      "Cucumber",
      "Spinach",
      "Arugula",
      "Radish",
      "Turnip",
      "Beet",
      "Sweet Potato",
      "Ginger",
      "Zucchini",
      "Eggplant",
      "Mushroom",
      "Corn",
      "Peas",
      "Celery",
      "Leak",
      "Okra",
      "Pumpkin",
      "Beans",
    ],
  },
  fruits: {
    title: "Fruits",
    options: [
      "Apple",
      "Banana",
      "Orange",
      "Pear",
      "Pineapple",
      "Strawberry",
      "Blueberry",
      "Raspberry",
      "Blackberry",
      "Cherry",
      "Mango",
      "Kiwi",
      "Lemon",
      "Grapefruit",
      "Watermelon",
      "Melon",
      "Peach",
      "Plum",
      "Grapes",
      "Fig",
      "Dates",
      "Papaya",
      "Avocado",
      "Pomegranate",
      "Coconut",
      "Guava",
      "Apricot",
    ],
  },
  meatAndPoultry: {
    title: "Meat & Poultry",
    options: [
      "Chicken",
      "Beef",
      "Pork",
      "Lamb",
      "Turkey",
      "Sausage",
      "Minced Meat",
    ],
  },
  seafood: {
    title: "Seafood",
    options: [
      "Fish",
      "Shrimp",
      "Crab",
      "Lobster",
      "Oyster",
      "Mussel",
      "Clam",
      "Scallop",
      "Squid",
      "Octopus",
      "Tuna",
    ],
  },
  dairy: {
    title: "Dairy",
    options: [
      "Milk",
      "Cheese",
      "Yogurt",
      "Butter",
      "Cream",
      "Eggs",
      "Ice Cream",
      "Cream Cheese",
      "Sour Cream",
      "Greek Yogurt",
      "Milk Powder",
      "Milk Tea",
    ],
  },
  sweetsAndBaking: {
    title: "Sweets & Baking",
    options: [
      "Sugar",
      "Honey",
      "Flour",
      "Baking Powder",
      "Baking Soda",
      "Brown Sugar",
      "Vanilla",
      "Yeast",
      "Cocoa Powder",
      "Jelly",
      "Jam",
      "Peanut Butter",
      "Almond Butter",
      "Cashew Butter",
      "Walnut Butter",
      "Hazelnut Butter",
      "Pistachio Butter",
      "Whipping Cream",
    ],
  },
  other: {
    title: "Other",
    options: [
      "Bread",
      "Rice",
      "Bulgur",
      "Quinoa",
      "Oats",
      "Lentils",
      "Tortilla",
    ],
  },
};

const IngredientsProvider = ({ children }) => {
  const [ingredientsState, setIngredientsState] = useState(ingredients);
  return (
    <IngredientsContext.Provider
      value={{ ingredientsState, setIngredientsState }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
export default IngredientsProvider;
