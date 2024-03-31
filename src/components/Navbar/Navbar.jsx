// import Darkmode from "./Darkmode";
import './navbar.css';

import { FaRegMoon } from "react-icons/fa";
// import '../App.css';
const Navbar = ({handleLoginp}) =>{
      
    return (

      <>
        <nav className="mode">
            <div className="logo">
                <img src="./brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help?</li>
            </ul>
            <div className="darkmode">
                {/* <Darkmode/> */}
                <div>
                    <button className="darkmode-btn">
                    <FaRegMoon />
                    </button>
                </div>
                <div className="login-btn">
                    <button id='loginBtn' onClick={handleLoginp}>Login</button>
                    
                </div>
            </div>
        </nav>
        
        </>
    );
};
export default Navbar;