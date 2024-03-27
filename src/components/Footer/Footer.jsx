import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${style.footer}`}>
      <div className={`${style.footerRow}`}>
        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Info</h4>
          <ul className={`${style.footerColListParent}`}>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">About Us</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Compressions</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Customers</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Service</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Collection</a></li>
          </ul>
        </div>

        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Explore</h4>
          <ul className={`${style.footerColListParent}`}>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Free Designs</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Latest Designs</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Themes</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Popular Designs</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Art Skills</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">New Uploads</a></li>
          </ul>
        </div>

        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Legal</h4>
          <ul className={`${style.footerColListParent}`}>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Customer Agreement</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Privacy Policy</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">GDPR</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Security</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Testimonials</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="#">Media Kit</a></li>
          </ul>
        </div>

        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className={`${style.icons}`}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <hr />
      <p className={`${style.madeby}`}>Designed & Developed by 'Ashish Pandey'</p>
    </footer>
  );
}

export default Footer;
