import style from './Latest.module.css';
// import { CiPlay1 } from "react-icons/ci";

function Latest() {
  return (
    <section className={`${style.container} ${style.latest_section}`}>
        <div className={`${style.customer_stats}`} >
            <h4><span>20K+</span>Order Completed</h4>
            <h4><span>40K+</span>Regular Customers</h4>
            <h4><span>18K+</span>Happy Customers</h4>
        </div>
        <div className={`${style.latest_video}`}>
            <h4 className={`${style.vertical_text}`}>NIKE AIR MAX</h4>
            <img src="/fakevideo.jpg" alt="video" />
            {/* <CiPlay1 className='play_btn' />  */}

        </div>
    </section>
  )
}

export default Latest;