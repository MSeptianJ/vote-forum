import React from 'react';
import BtnPrimary from './BtnPrimary';

function CategoryBox() {
  return (
    <div className=" sticky bottom-20 m-auto w-10/12 rounded-md bg-primary p-4 px-6 text-white shadow-lg md:hidden">
      <h3 className=" mb-2 text-xl font-bold">Categories</h3>
      <div className=" flex gap-3 overflow-x-auto py-2">
        <BtnPrimary
          btnText="#dicoding"
          btnStyles="text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
          btnFunction={() => console.log('boop')}
        />
        <BtnPrimary
          btnText="#perkenalan"
          btnStyles="text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
          btnFunction={() => console.log('boop')}
        />
        <BtnPrimary
          btnText="#game"
          btnStyles="text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
          btnFunction={() => console.log('boop')}
        />
      </div>
    </div>
  );
}

CategoryBox.propTypes = {};

export default CategoryBox;
