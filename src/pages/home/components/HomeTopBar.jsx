import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../../components/Button/BtnPrimary';
import CategoryItem from '../../../components/Category/CategoryItem';
import { IconPlus } from '../../../libs/icons';

function HomeTopBar({
  categories, auth, onSearch, searched,
}) {
  return (
    <div className="md flex w-full items-center justify-center gap-5 px-5 text-white">
      <div className=" m-auto hidden w-10/12 rounded-md bg-primary p-4 text-white shadow-lg md:block">
        <h3 className="mb-2 text-xl font-bold">Categories</h3>
        <div className=" flex gap-3 overflow-x-auto">
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

      <div className=" w-full flex-1 rounded-md bg-secondary p-4 shadow-lg transition-colors duration-300 hover:bg-primary md:w-auto">
        <Link to="/submit">
          <BtnPrimary
            btnStyles="w-full md:mb-1 md:mt-1 flex text-xl justify-center items-center gap-3"
            btnText="New Thread"
            btnDisabled={!auth}
            btnIcon={<IconPlus />}
          />
        </Link>
      </div>
    </div>
  );
}

HomeTopBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  auth: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  searched: PropTypes.string,
};

HomeTopBar.defaultProps = {
  auth: undefined,
  searched: undefined,
};

export default HomeTopBar;
