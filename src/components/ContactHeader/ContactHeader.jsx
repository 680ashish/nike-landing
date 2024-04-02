import ContactForm from '../ContactForm/ContactForm'
import style from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <>
    <div className={`container ${style.contact_section}`}>
        <div>
          <h1>CONTACT US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit doloribus at exercitationem commodi numquam eligendi tempore quaerat totam nobis ratione nesciunt, amet labore omnis iusto et vel illo. Perspiciatis, minus?
          </p>
        </div>
        <ContactForm/>
    </div>
    </>
  )
}

export default ContactHeader