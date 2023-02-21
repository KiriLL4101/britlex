import styles from './Menu.module.css'

const menu = ['Home', 'Skills', 'About Us', 'Pricing', 'Contacts']

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menu.map((text) => (
        <li>{text}</li>
      ))}
    </ul>
  )
}
