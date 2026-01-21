import letsCookImage from "../assets/letsCook.png";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useContext, useState, useEffect, useRef } from "react";
import { IngredientsContext } from "../contexts/ingredientsContext";
import Button from "@mui/material/Button";
import RecipesGrid from "./RecipesGrid";

const STORAGE_KEY = "selectedIngredients";

// Helper function to load from localStorage (runs synchronously)
const loadSelections = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Error loading saved selections:", error);
  }
  // if there is no saved selections, return an empty object
  return {
    vegetables: [],
    fruits: [],
    meatAndPoultry: [],
    seafood: [],
    dairy: [],
    sweetsAndBaking: [],
    other: [],
  };
};

function AppContent() {
  const { ingredientsState } = useContext(IngredientsContext);
  const API_KEY = "7f53c6254fc343d7888a5291af6def1c";
  const [recipesState, setRecipes] = useState([]);

  // Initialize state directly from localStorage (runs once, synchronously)
  const initialSelections = loadSelections();
  const [selectedVegetables, setSelectedVegetables] = useState(
    initialSelections.vegetables
  );
  const [selectedFruits, setSelectedFruits] = useState(
    initialSelections.fruits
  );
  const [selectedMeatAndPoultry, setSelectedMeatAndPoultry] = useState(
    initialSelections.meatAndPoultry
  );
  const [selectedSeafood, setSelectedSeafood] = useState(
    initialSelections.seafood
  );
  const [selectedDairy, setSelectedDairy] = useState(initialSelections.dairy);
  const [selectedSweetsAndBaking, setSelectedSweetsAndBaking] = useState(
    initialSelections.sweetsAndBaking
  );
  const [selectedOther, setSelectedOther] = useState(initialSelections.other);
  const isFirstRender = useRef(true);

  // Save selections to localStorage whenever any selection changes (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const selectionsToSave = {
      vegetables: selectedVegetables,
      fruits: selectedFruits,
      meatAndPoultry: selectedMeatAndPoultry,
      seafood: selectedSeafood,
      dairy: selectedDairy,
      sweetsAndBaking: selectedSweetsAndBaking,
      other: selectedOther,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectionsToSave));
  }, [
    selectedVegetables,
    selectedFruits,
    selectedMeatAndPoultry,
    selectedSeafood,
    selectedDairy,
    selectedSweetsAndBaking,
    selectedOther,
  ]);

  // Combine all selected ingredients into one array
  const selectedIngredients = [
    ...selectedVegetables,
    ...selectedFruits,
    ...selectedMeatAndPoultry,
    ...selectedSeafood,
    ...selectedDairy,
    ...selectedSweetsAndBaking,
    ...selectedOther,
  ];

  const onCookButtonClick = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredients.join(
          ","
        )}&number=10&ranking=1&ignorePantry=true&apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log("API Response:", data);
      setRecipes(data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <>
      <h1 className="cook-title">let's cook</h1>
      <img src={letsCookImage} alt="foodPic" className="cook-image" />
      <h1 className="fridge-title">What's in your fridge?</h1>
      <Box className="autocomplete-container">
        <Autocomplete
          multiple
          id="vegetables-checkboxes"
          options={ingredientsState.vegetables.options}
          value={selectedVegetables}
          onChange={(event, newValue) => {
            setSelectedVegetables(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🥦 Vegetables"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
        <Autocomplete
          multiple
          id="fruits-checkboxes"
          options={ingredientsState.fruits.options}
          value={selectedFruits}
          //   on Autocomplete, its get the previous values without using [...prev, e.target.value]
          onChange={(event, newValue) => {
            setSelectedFruits(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🍎 Fruits"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
        <Autocomplete
          multiple
          id="meat-checkboxes"
          options={ingredientsState.meatAndPoultry.options}
          value={selectedMeatAndPoultry}
          onChange={(event, newValue) => {
            setSelectedMeatAndPoultry(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🥩 Meat & Poultry"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
        <Autocomplete
          multiple
          id="seafood-checkboxes"
          options={ingredientsState.seafood.options}
          value={selectedSeafood}
          onChange={(event, newValue) => {
            setSelectedSeafood(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🐟 Seafood"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
        <Autocomplete
          multiple
          id="dairy-checkboxes"
          options={ingredientsState.dairy.options}
          value={selectedDairy}
          onChange={(event, newValue) => {
            setSelectedDairy(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🥛 Dairy"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
        <Autocomplete
          multiple
          id="sweets-checkboxes"
          options={ingredientsState.sweetsAndBaking.options}
          value={selectedSweetsAndBaking}
          onChange={(event, newValue) => {
            setSelectedSweetsAndBaking(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🍫 Sweets & Baking"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
        <Autocomplete
          multiple
          id="other-checkboxes"
          options={ingredientsState.other.options}
          value={selectedOther}
          onChange={(event, newValue) => {
            setSelectedOther(newValue);
          }}
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps} className="checkbox-option">
                <Checkbox checked={selected} className="ingredient-checkbox" />
                {option}
              </li>
            );
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                className="ingredient-chip"
              />
            ))
          }
          className="ingredient-autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              label="🍴 Other"
              placeholder="More?"
              className="ingredient-input"
            />
          )}
        />
      </Box>
      <br /> <br />
      <Button
        variant="contained"
        className="cook-button"
        onClick={onCookButtonClick}
      >
        Cook
      </Button>
      <br /> <br />
      {/* display the recipes */}
      <RecipesGrid recipes={recipesState} />
    </>
  );
}

export default AppContent;
