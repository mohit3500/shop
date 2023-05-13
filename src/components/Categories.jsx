import React from 'react';
import data from '../data.json';

const Categories = () => {
  return (
    <div className="mt-16 w-screen h-auto px-14 mb-20">
      <h2 className="text-[20px] font-semibold mb-10">
        Shop Our Top Categories
      </h2>
      <div className="flex gap-5">
        {data.categories.map((category) => (
          <div
            key={category.id}
            className="w-[250px] h-[225px] rounded-lg shadow-md relative cursor-pointer"
          >
            <img
              src={category.pic}
              alt=""
              className="h-full w-full rounded-lg"
            />
            <div className="absolute top-5 left-0 right-0 text-center text-white font-medium text-[16px] tracking-[0.5px]">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
