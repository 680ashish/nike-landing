import './container.css';
// import { FaRegMoon } from "react-icons/fa";
const Container = () => {
    return (
        <>
            <section className="mode container homeSection">
                <div className="content">
                    <h2>
                        YOUR FEET <br /> DESERVE <br />THE BEST
                    </h2>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="btns">
                        <button>SHOP NOW</button>
                        <button className=".secondary-btn">CATEGORY</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
                            <a href="https://www.amazon.in/" target='_blank' rel="noreferrer"><img src="/amazon.png" alt="amazon-logo" /></a>
                            <a href="https://www.flipkart.com/" target='_blank' rel="noreferrer"><img src="/flipkart.png" alt="amazon-logo" /></a>
                        </div>
                    </div>
                </div>
                <div className="home-img">
                    <img src="./hero-image.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default Container;
