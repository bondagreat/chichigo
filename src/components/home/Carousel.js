import React, { useState } from "react";
import angleRight from "../images/angle-right-solid.svg";
import angleLeft from "../images/angle-left-solid.svg";

import Crs1 from "../images/test1.jpg";
import Crs2 from "../images/test2.jpg";
import Crs3 from "../images/test3.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      src: Crs1,
      altText: "Slide 1",
    },
    {
      src: Crs2,
      altText: "Slide 2",
    },
    {
      src: Crs3,
      altText: "Slide 3",
    },
  ];

  const handleNext = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  return (
    <div className="carousel container min-w-728 relative">
      <div className="carousel-item">
        <img src={items[activeIndex].src} alt={items[activeIndex].altText} />
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-2/4 m-4 bg-my-crs h-16 w-16 opacity-50 rounded-full text-white hover:opacity-100"
        onClick={handlePrev}
      >
        <img className="w-16 h-14" src={angleLeft} />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-2/4 m-4 bg-my-crs h-16 w-16 opacity-50 rounded-full text-white hover:opacity-100"
        onClick={handleNext}
      >
        <img className="w-16 h-14" src={angleRight} />
      </button>
      <ul className="carousel-indicators absolute flex space-x-4 bottom-4 left-1/2 -translate-x-2/4">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`inline-block rounded-full w-3 h-3 hover:cursor-pointer ${
              index === activeIndex ? "active bg-my-orange" : "bg-my-gray"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
