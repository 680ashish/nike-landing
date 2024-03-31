import styles from './ShoeCard.module.css';

const ShoeDetails = ({ shoeContent, reset }) => {
  const handleDescriptionClick = () => {
    // Add your click handler logic here
  };

  return (
    <>
      <div className={`${styles.container} ${styles.clearfix}`}>
        <div className={styles['shoe-details-left']}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/nike.svg" alt="logo" className={styles.logo} />
          <div className={styles['product-title']}>
            {shoeContent.shoeName} <strong>{shoeContent.shoeNum}</strong>
          </div>
          <div className={styles['product-description']}>
            Dynamic Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness.
          </div>
          <img src="shoe.png" alt="shoe" className={`${styles['product-shot']} ${styles.animated} ${styles.fadeInLeft}`} />
          <div className={styles['product-price']}>12,995</div>
          <div className={styles['product-price-details']}>
            EMI starts from 534 + Rs 100 Delivery
          </div>
        </div>

        <div className={styles['shoe-details-right']}>
          <span className={styles['product-title']}>{shoeContent.shoeName} <strong>{shoeContent.shoeNum}</strong></span>
          <span className={styles.label}>New</span>
          <div className={styles['product-category']}>
            Running Collections
          </div>
          <div className={styles['product-stars']}>
            <i className={`fa fa-star ${styles.faStar}`}></i>
            <i className={`fa fa-star ${styles.faStar}`}></i>
            <i className={`fa fa-star ${styles.faStar}`}></i>
            <i className={`fa fa-star gray ${styles.faStar}`}></i>
            <i className={`fa fa-star gray ${styles.faStar}`}></i>
          </div>
          <ul className={styles['product-tabs']}>
            <li className={styles.active}><a href="#pane1" onClick={handleDescriptionClick}>Description</a></li>
            <li><a href="#pane2">Details</a></li>
            <li><a href="#pane3">Reviews</a></li>
            <li><a href="#pane4">Size & Fit</a></li>
          </ul>
          <div className={styles['tab-content']}>
            <div id="pane1" className={`${styles.tabPane} ${styles.active}`}>
              Dynamic Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness.
            </div>
            <div id="pane2" className={styles.tabPane}></div>
            <div id="pane3" className={styles.tabPane}></div>
            <div id="pane4" className={styles.tabPane}></div>
          </div>
          <h2>Size</h2>
          <ul className={styles.sizes}>
            <li><a href="07">07</a></li>
            <li><a href="8">08</a></li>
            <li className={styles.active}><a href="09">09</a></li>
            <li><a href="10">10</a></li>
            <li><a href="11">11</a></li>
          </ul>
          <h2>Colour</h2>
          <ul className={styles.colours}>
            <li className={styles.active}><a href="blue"><span className={`${styles.circle} ${styles.blue}`}></span></a></li>
            <li><a href="orange"><span className={`${styles.circle} ${styles.orange}`}></span></a></li>
            <li><a href="yellow"><span className={`${styles.circle} ${styles.yellow}`}></span></a></li>
            <li><a href="black"><span className={`${styles.circle} ${styles.black}`}></span></a></li>
          </ul>
          <a href="/" className={`${styles.btn} ${styles['btn-primary']}`}>Add to Cart</a>
          <a href="/" className={`${styles.btn} ${styles['btn-secondary']}`}>Wishlist</a>
        </div>

        <div className={styles['close-button']} onClick={reset}>&times;</div>
      </div>
    </>
  );
}

export default ShoeDetails;
