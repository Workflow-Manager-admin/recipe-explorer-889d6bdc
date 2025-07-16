import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import recipes from '../data/recipes';

/* PUBLIC_INTERFACE */
function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id.toString() === id);

  if (!recipe) {
    return (
      <main className="container">
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </main>
    );
  }

  return (
    <main className="container">
      <img className="detail-img" src={recipe.image} alt={recipe.title} />
      <div className="detail-content">
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>

        <h2>Ingredients</h2>
        <ul className="ingredients">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h2>Instructions</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{recipe.instructions}</pre>

        <Link to="/">← Back to recipes</Link>
      </div>
    </main>
  );
}

export default RecipeDetail;
