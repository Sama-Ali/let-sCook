import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/More";
import { Link } from "react-router-dom";

export default function RecipesGrid({ recipes }) {
  const safeRecipes = Array.isArray(recipes) ? recipes : [];

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" className="recipesFounded">
          Recipes Founded:
        </ListSubheader>
      </ImageListItem>
      {safeRecipes.map((recipe, index) => (
        <ImageListItem key={recipe.id}>
          <img
            srcSet={`${recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${recipe.image}?w=248&fit=crop&auto=format`}
            alt={recipe.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={recipe.title}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${recipe.title}`}
              >
                {/* move to RecipeDetails component */}
                <Link to={`/recipe/${recipe.id}`} state={{ recipe }}>
                  <MoreIcon className="moreIcon" />
                </Link>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
