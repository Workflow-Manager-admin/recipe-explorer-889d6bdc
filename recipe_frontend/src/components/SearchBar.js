import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* PUBLIC_INTERFACE */
function SearchBar({ onSearch, placeholder = 'Search recipes...' }) {
  const [term, setTerm] = useState('');

  const submit = e => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={submit}>
      <input
        className="search-input"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder={placeholder}
        aria-label="Search recipes"
      />
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
