// import Darkmode from "./Darkmode";
import './navbar.css';

import { FaRegMoon } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from 'react';
// import '../App.css';
const Navbar = ({handleLoginp}) =>{
    const [isOpen,setIsOpen]=useState(false);

    const toggleMenu = () =>{
        console.log("clicked");
        setIsOpen(!isOpen)
    }
      
    return (

      <>
        <nav className="mode">

            {/* item 1 */}
            <div className="logo">
                <img src="./brand_logo.png" alt="logo" />
            </div>
            {/* item 2 */}
            <div className='midMenuItems'>
                <div className='hide'>
                    <ul className='navItems '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Help?</li>
                    </ul>
                    
                </div>
                <div className='rightMenuItems'>

                    <div className='darkmode hide'>
                    <button className="darkmode-btn">
                        <FaRegMoon />
                    </button>
                    </div>

                    <div className="login-btn hide">
                        <button id='loginBtn' onClick={handleLoginp}>Login</button>        
                    </div>

                </div>
            </div>
            {/* item 3 */}

            <CgMenuRightAlt className='navbarToggle' onClick={toggleMenu}/>

        </nav>
        
        </>
    );
};
export default Navbar;