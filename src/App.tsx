import { Button } from './component/Button/Button'
import { Menu } from './component/Menu/Menu'

import { ReactComponent as Logo } from './assets/main-logo.svg'

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
        <Menu />
        <Button text="Let’s Talk" />
      </header>
    </div>
  )
}

export default App
