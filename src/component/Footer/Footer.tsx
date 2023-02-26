import { ReactComponent as LogoSvg } from '../../assets/main-logo.svg'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <LogoSvg />
      <ul className={styles.nav}>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </footer>
  )
}
