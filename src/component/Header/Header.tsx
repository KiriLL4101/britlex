import { Menu } from '../Menu/Menu'
import { Button } from '../Button/Button'

import { ReactComponent as LogoSvg } from '../../assets/main-logo.svg'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <LogoSvg />
      <Menu />
      <Button text="Let’s Talk" variant="secondary" />
    </header>
  )
}
