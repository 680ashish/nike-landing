import React from 'react'
// import { MdOutlineMessage } from "react-icons/md";
import style from './Button.module.css';
const Button = (props) => {
  return (

    <button className={props.isOutline ? style.outline_btn:style.primary_btn}>
        {/* <MdOutlineMessage fontSize={"24px"}/> */}
        {props.icon}
        {props.text}
    </button>

  )
}

export default Button