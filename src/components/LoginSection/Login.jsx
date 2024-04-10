import React, { useState } from 'react'
import styles from './Login.module.css';
// import userIcon from './person.png';
// import emailIcon from './email.png';
// import pwdIcon from './password.png';
const Login = ({handleLoginp,toggleLogin,isLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [action,setAction] = useState("Log In");


  const handleLogin = () => {
    // Perform validation here
    if (email === '680ashish@gmail.com' && password === '123') {
      console.log('Login successful');
      // Call login handler
      handleLoginp();
      // Toggle login state
      toggleLogin();
    } else {
      console.log('Invalid email or password');
      // Handle invalid login attempt
    }
  };

  return (
    <>
    <div className='loginBox'>
    < div className={` ${styles.logincontainer} `}>
      <div className={`${styles.header}`}>
        <div className={`${styles.text}`}>{action}</div>
        <div className="underline"></div>

      </div>
      <div className={`${styles.inputs}`}>
        {action==="Log In"?<div></div>:
        <div className={`${styles.input}`}>
        <img src="person.png" alt="person" className={`${styles.img}`}/>
        <input type="text" placeholder='Enter username'/>
      </div>  
        }
        
        <div className={`${styles.input}`}>
          <img src="email.png" alt="email" className={`${styles.img}`}/>
          <input type="email" 
                 placeholder='Enter your email'
                 onChange={(e) => setEmail(e.target.value)}
                 />
        </div>
        
        <div className={`${styles.input}`}>
          <img src="password.png" alt="password" className={`${styles.img}`}/>
          <input type="password"
                 placeholder='Enter your password'
                 onChange={(e) => setPassword(e.target.value)}
                />
        </div>
      </div>
      {
        action==="Sign Up"?<div></div>:
      <div className={`${styles.faggot}`}>
        Lost Password?
      </div>
      }
      <div className={`${styles.submitContainer}`}>
        <div className={action==="Log In"?`${styles.submit} ${styles.gray}`:`${styles.submit}`} onClick={()=>{setAction("Sign Up")}}>
          Sign Up
        </div>
        <div className={action==="Log In"?`${styles.submit} `:`${styles.submit} ${styles.gray}`}
          onClick={handleLogin}>
          Log In
        </div>
      </div>
    </div>



    </div>

    </>
  )
}

export default Login;

