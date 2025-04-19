import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilters = ({ activeCategory, handleClick }) => {
  const categories = ["Web based", "Backend", "CLI tools"];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0', flexWrap: 'wrap' }}>
      {categories.map((category) => (
        <button
          key={category}
          className={`skillbutton ${
            activeCategory === category ? 'skillbutton-active' : ''
          }`}
          type="button"
          onClick={() => handleClick(activeCategory === category ? 'All' : category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryFilters.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CategoryFilters;