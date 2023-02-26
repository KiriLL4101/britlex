import { ReactComponent as ContactSvg } from '../../assets/contact.svg'
import { Button } from '../Button/Button'

import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.root}>
      <ContactSvg />

      <div className={styles.wrapper}>
        <h2>Contact Us</h2>
        <p>
          Discover your current English level by taking our free online English test.Sign up to our
          newsletter for learning tips and free resources
        </p>
        <form>
          <input type="text" placeholder="Enter Your E-mail" />
          <Button text="Subscribe" />
        </form>
      </div>
    </div>
  )
}
