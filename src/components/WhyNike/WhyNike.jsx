import React from 'react'
import style from './WhyNike.module.css';
const WhyNike = () => {
  return (
    <>
      <section className={` ${style.container}`}>
        <div>
          <img src="shoe3.jpg" alt="" />
        </div>

        <div className={`${style.content}`}>
          <h3>
            WHY CHOOSE <span>NIKE</span>
          </h3>
            <p>
            A compelling "Why Nike" page should encapsulate the essence and values that make Nike more than just a brand but a symbol of inspiration, innovation, and empowerment 
            </p>
            <p>
            Nike isn't just a sports brand; it's an innovation powerhouse. From groundbreaking footwear technologies to cutting-edge athletic apparel, we continuously push the boundaries of what's possible. Our relentless pursuit of innovation isn't just about staying ahead in the game; it's about empowering athletes to achieve their best, break records, and defy expectations. 
            </p>
            <p>
            At the heart of everything we do are the athletes. Whether you're a professional athlete striving for victory or an everyday hero pushing your limits, Nike is here to support you every step of the way. We design our products with the athlete in mind, providing the tools, technology, and inspiration to help you reach your full potential. 
            </p>
              <div className={`${style.bulletPoints}`}>
              <ul className={`${style.whyList}`}>
                <div></div>
                

              </ul>
              </div>
        </div>
        
    </section>
    
    
    </>
    
  )
}

export default WhyNike;


// <li>Wide Selection </li> 
//                 <li>Quality Assurance </li>
//                 <li>Competitive Pricing</li>
//                 <li>Satisfaction Guaranteed</li>
//                 <li>Fast Shipping</li>
//                 <li>Secure Transactions</li>