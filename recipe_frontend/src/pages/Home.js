import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipes';

/* PUBLIC_INTERFACE */
function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = useMemo(() => {
    if (!searchTerm) return recipesData;
    return recipesData.filter(r =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="container">
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      </div>
    </main>
  );
}

export default Home;
