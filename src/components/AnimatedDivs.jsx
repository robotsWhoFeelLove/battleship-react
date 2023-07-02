import React, { useEffect, useState } from 'react';
import { Board } from './App';
// import ps from "../index.js"


const AnimatedDivs = (items) => {
  const [displayedDivs, setDisplayedDivs] = useState([]);

  useEffect(() => {
    let timeoutId;

    // Display each div with a 50ms delay
    items.spaces.forEach((item, index) => {
      timeoutId = setTimeout(() => {
        setDisplayedDivs((prevDivs) => [...prevDivs, item]);
      }, index * 50);
    });

    // Clear timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [items.spaces]);

  return (
    <div>
      {displayedDivs.map((item) => (
        <div key={item.space} 
            id={item.space}
            className= "space"
            >
          {/* Render div content here */}
        </div>
      ))}
    </div>
  );
};

export default AnimatedDivs;
