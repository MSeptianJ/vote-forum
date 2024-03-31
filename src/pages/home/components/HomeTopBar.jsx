import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../../components/BtnPrimary';
import { IconPlus } from '../../../libs/icons';

function HomeTopBar() {
  return (
    <div className="md flex w-full items-center justify-center gap-5 px-5 text-white">
      <div className=" m-auto hidden w-10/12 rounded-md bg-primary p-4 text-white shadow-lg md:block">
        <h3 className="mb-2 text-xl font-bold">Categories</h3>
        <div className=" flex gap-3 overflow-x-auto">
          <BtnPrimary
            btnText="#dicoding"
            btnStyles="text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
            btnFunction={() => console.log('boop')}
          />
          <BtnPrimary
            btnText="#Mom"
            btnStyles="text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
            btnFunction={() => console.log('boop')}
          />
          <BtnPrimary
            btnText="#hai"
            btnStyles="text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
            btnFunction={() => console.log('boop')}
          />
        </div>
      </div>

      <div className=" w-full flex-1 rounded-md bg-secondary p-4 shadow-lg transition-colors duration-300 hover:bg-primary md:w-auto">
        <Link to="/submit">
          <BtnPrimary
            btnStyles="w-full md:mb-1 md:mt-1 flex text-xl justify-center items-center gap-3"
            btnText="New Thread"
            btnIcon={<IconPlus />}
          />
        </Link>
      </div>
    </div>
  );
}

HomeTopBar.propTypes = {};

export default HomeTopBar;
