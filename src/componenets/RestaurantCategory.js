import { useState, useRef } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data.itemCards);
  const accordionRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    setShowIndex();
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={accordionRef}>
      {/* Header */}
      <div className="flex items-center justify-between w-6/12 bg-gray-100 shadow-lg p-2 mx-auto my-4">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold text-lg ">
            {data.title} ({data?.itemCards?.length})
          </span>

          <span>{showItems ? "🔽" : "🔼"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accodian Body */}
    </div>
  );
};

export default RestaurantCategory;
