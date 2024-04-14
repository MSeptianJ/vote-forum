import PropTypes from 'prop-types';
import React from 'react';
import BtnPrimary from '../BtnPrimary';

function CategoryItem({ category, onSearch, searched }) {
  const handleSerachCategory = () => {
    onSearch(category);
  };

  return (
    <BtnPrimary
      btnText={category}
      btnStyles={`text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary ${searched === category ? 'bg-secondary' : ''}`}
      btnFunction={handleSerachCategory}
    />
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searched: PropTypes.string,
};

CategoryItem.defaultProps = {
  searched: undefined,
};

export default CategoryItem;
