import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import './App.css';

/* PUBLIC_INTERFACE */
function App() {
  const [theme, setTheme] = useState('light');

  // apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <Link className="brand" to="/">Recipe Explorer</Link>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>

        <footer className="footer">
          © {new Date().getFullYear()} Recipe Explorer
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
