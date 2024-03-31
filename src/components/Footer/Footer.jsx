import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${style.footer}`}>
      <div className={`${style.footerRow}`}>
        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Info</h4>
          <ul className={`${style.footerColListParent}`}>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/about">About Us</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/compressions">Compressions</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/customers">Customers</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/service">Service</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/collection">Collection</a></li>
          </ul>
        </div>

        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Explore</h4>
          <ul className={`${style.footerColListParent}`}>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/free-designs">Free Designs</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/latest-designs">Latest Designs</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/themes">Themes</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/popular-designs">Popular Designs</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/art-skills">Art Skills</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/new-uploads">New Uploads</a></li>
          </ul>
        </div>

        <div className={`${style.footerCol}`}>
          <h4 className={`${style.footerColHeading}`}>Legal</h4>
          <ul className={`${style.footerColListParent}`}>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/customer-agreement">Customer Agreement</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/privacy-policy">Privacy Policy</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/gdpr">GDPR</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/security">Security</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/testimonials">Testimonials</a></li>
            <li className={`${style.footerColLists}`}><a className={`${style.footerColLinks}`} href="/media-kit">Media Kit</a></li>
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
