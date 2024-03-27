import React, { useState } from 'react';
import TrendingCard from './TrendingCard/TrendingCard';
import style from './TrendingCollection.module.css';
import ShoeDetails from './TrendingCard/ShoeDetails/ShoeDetails';

const TrendingCollection = () => {
  const shoes = [
    { shoeNum: "001", shoeName: "Bata XYZ" },
    { shoeNum: "002", shoeName: "Nike Air" },
    { shoeNum: "003", shoeName: "Adidas Ultraboost" },
    { shoeNum: "004", shoeName: "Puma RS-X" },
    { shoeNum: "005", shoeName: "Reebok Classic" },
    { shoeNum: "006", shoeName: "Vans Old Skool" },
    { shoeNum: "007", shoeName: "Converse Chuck Taylor" },
    { shoeNum: "008", shoeName: "New Balance 990" },
    { shoeNum: "009", shoeName: "Under Armour HOVR" },
    { shoeNum: "010", shoeName: "Sketchers Go Walk" },
    // Add other shoes here
  ];

  const [showDetailsSection, setShowDetailsSection] = useState(false);
  const [shoeContent, setShoeContent] = useState(null);

  const showContent = (id) => { // ye function
    const shoe = shoes.find(shoe => shoe.shoeNum === id);
    console.log("CLICKED", shoe); 
    setShowDetailsSection(true);
    setShoeContent(shoe);
  }

  const resetContent = () => {
    setShowDetailsSection(false);
    setShoeContent(null);
  }

  return (
    <>
      <h3 className={`${style.heading}`}>
        Trending <span>Collections</span>
      </h3>
      <div className={`${style.container}`}>
        {showDetailsSection ? (
          <ShoeDetails shoeContent={shoeContent} reset={resetContent} />
        ) : (
          shoes.map(shoe => (
            <TrendingCard key={shoe.shoeNum} num={shoe.shoeNum} name={shoe.shoeName} showContent={showContent} />
          ))
        )}
      </div>
    </>
  );
}

export default TrendingCollection;
