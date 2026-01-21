import "./App.css";
import IngredientsProvider from "./contexts/ingredientsContext";
import AppContent from "./componemts/AppContent";
import RecipeDetails from "./componemts/RecipeDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App-container">
      <IngredientsProvider>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </IngredientsProvider>
    </div>
  );
}

export default App;
