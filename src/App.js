import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Latest from './components/Latest/Latest';
import TrendingCollection from './components/TrendingCollection/TrendingCollection';
import WhyNike from './components/WhyNike/WhyNike';
import Footer from './components/Footer/Footer';

import Testimonial from './components/Testimonial/Testimonial';
// import ShoeDetails from './components/TrendingCollection/TrendingCard/ShoeDetails/ShoeDetails';
import Login from './components/LoginSection/Login';
// import { ProductPage } from './components/ProductPage/ProductPage';

function App() {
  
  const [login,setLogin]= useState(false);
  function handleLoginp(){
    setLogin(!login);

  }

  const [isLogin,setIsLogin]= useState(false);

  const toggleLogin= () =>{
      setIsLogin(!isLogin);
  }
  return (
    <>
    <Navbar handleLoginp={handleLoginp} isLogin={isLogin}  toggleLogin={toggleLogin} />
    <div>
      {
        login && !isLogin ?<Login handleLoginp={handleLoginp}  toggleLogin={toggleLogin} isLogin={isLogin}/>
        :
        <>
        <Container />
        <Latest/>
        <TrendingCollection/>
        <WhyNike/>
        <Testimonial/>
        <ContactHeader/>
        <Footer/> 
        </>
      }

    </div>

    </>
  );
}

export default App;
