import React, { useState } from "react";
import IngredientList from "./componentes/IngredientList";
import RecipeTitle from "./componentes/RecipeTitle";

function App() {
  // Objeto receta inicial
  const initialRecipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 1.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: true },
      { name: "Pepper", prepared: true },
    ],
  };


  function ingredientClick(root) {
    const updatedRecipe = { ... recipe };
    updatedRecipe.ingredients[root].prepared = !updatedRecipe.ingredients[root].prepared;
    setRecipe(updatedRecipe);
}

  // Estado para la receta
  const [recipe, setRecipe] = useState(initialRecipe);

  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* Componente RecipeTitle */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      {/* Componente IngredientList */}
      <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />
    </article>
  );
}

export default App;
