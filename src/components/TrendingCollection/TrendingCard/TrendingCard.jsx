import React from 'react';
import style from './TrendingCard.module.css';
import { GrCart } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";
const TrendingCard = ({ num, name, showContent }) => {
  return (
    <div className={`${style.trending_container}`} onDoubleClick={() => showContent(num)}> 
      <div className={` ${style.trending_icons}`}>
        <IoIosHeartEmpty />
        <GrCart />
      </div>

      <div className={`${style.trending_img}`}>
        <img src="./shoe.png" alt="shoe img" />
        <h4 className={`${style.trending_shoe_name}`}>{name}</h4>
        <p>Id - {num}</p>
      </div>

    </div>

    
  );
};

export default TrendingCard;
