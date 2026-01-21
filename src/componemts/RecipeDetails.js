import { useLocation, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams();
  const recipe = location.state?.recipe;
  const API_KEY = "7f53c6254fc343d7888a5291af6def1c";

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (id) {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
          );
          const data = await response.json();
          setRecipeDetails(data);
        } catch (error) {
          console.error("Error fetching recipe details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe && !recipeDetails) {
    return (
      <div className="recipe-details">
        <h1>Recipe not found</h1>
        <Link to="/" className="back-link">
          ← Back to recipes
        </Link>
      </div>
    );
  }

  const usedIngredients = recipe?.usedIngredients ?? [];
  const cookingSteps = recipeDetails?.analyzedInstructions?.[0]?.steps ?? [];

  return (
    <div className="recipe-details">
      <Link to="/" className="back-link">
        ← Back to recipes
      </Link>

      <h1 className="recipe-title">{recipe?.title ?? recipeDetails?.title}</h1>

      <img
        src={recipe?.image ?? recipeDetails?.image}
        alt={recipe?.title ?? recipeDetails?.title}
        className="recipe-image"
      />

      <div className="recipe-content">
        {usedIngredients.length > 0 && (
          <section className="recipe-steps">
            <h2>Ingredients</h2>
            <ul>
              {usedIngredients.map((ing, index) => (
                <li key={ing.id ?? ing.name ?? index}>
                  {ing.amount} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="recipe-steps">
          <h2>Cooking steps</h2>
          {loading ? (
            <p>Loading steps...</p>
          ) : cookingSteps.length > 0 ? (
            <ol>
              {cookingSteps.map((step, index) => (
                <li key={step.number ?? index}>{step.step}</li>
              ))}
            </ol>
          ) : (
            <p>No cooking steps available for this recipe.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default RecipeDetails;
