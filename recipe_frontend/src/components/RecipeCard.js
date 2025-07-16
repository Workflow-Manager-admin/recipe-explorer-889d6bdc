import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* PUBLIC_INTERFACE */
function RecipeCard({ recipe }) {
  return (
    <Link className="card" to={`/recipe/${recipe.id}`}>
      <img className="card-img" src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-desc">{recipe.description}</p>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
