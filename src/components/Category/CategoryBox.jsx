import PropTypes from 'prop-types';
import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryBox({ categories, onSearch, searched }) {
  return (
    <div className=" sticky bottom-20 m-auto w-10/12 rounded-md bg-primary p-4 px-6 text-white shadow-lg md:hidden">
      <h3 className=" mb-2 text-xl font-bold">Categories</h3>
      <div className=" flex gap-3 overflow-x-auto py-2">
        {categories.map((category) => (
          <CategoryItem
            key={category}
            category={category}
            onSearch={onSearch}
            searched={searched}
          />
        ))}
      </div>
    </div>
  );
}

CategoryBox.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
  searched: PropTypes.string,
};

CategoryBox.defaultProps = {
  searched: undefined,
};

export default CategoryBox;
