import style from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdMailLock } from "react-icons/md";

function ContactForm() {
  return (
    <section className={style.container}>

        <div className={style.contact_form}>
          <div className={style.top_button}>
              <Button
              text="VIA CHAT"
              icon={<MdOutlineMessage fontSize={"24px"}/>}/>
              <Button
              text="VIA CALL"
              icon={<MdOutlinePermPhoneMsg fontSize={"24px"}/>}/>
          </div>
              <Button
                isOutline ={true}
                text="VIA EMAIL FORM"
                icon={<MdMailLock fontSize={"24px"}/>}/>
              <form autoComplete="off">
                <div className={style.form_control}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" />
                </div>
                <div className={style.form_control}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" />
                </div>
                <div className={style.form_control}>
                  <label htmlFor="text">Text</label>
                  <textarea name="text" rows="6" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button text="SUBMIT" />
                </div>

                {/* <div>{name + " " + email + " " + text}</div> */}
        </form>
          
        </div>
        
        <div className={style.contact_image}>
        <img src="/contact.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm