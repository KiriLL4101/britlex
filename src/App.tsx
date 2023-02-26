import { Button } from './component/Button/Button'
import { Menu } from './component/Menu/Menu'

import { ReactComponent as LogoSvg } from './assets/main-logo.svg'
import { ReactComponent as MainSvg } from './assets/main.svg'

import styles from './app.module.css'
import { Skills } from './component/Skills/Skills'
import { About } from './component/About/About'
import { Pricing } from './component/Pricing/Pricing'
import { Contact } from './component/Contact/Contact'

function App() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <LogoSvg />
          <Menu />
          <Button text="Let’s Talk" variant="secondary" />
        </header>
      </div>
      <div className={styles.container}>
        <section className={styles.block}>
          <div className={styles.title}>
            <h1>
              Learn
              <br /> Any Foreign Language
            </h1>
            <p>
              With our teachers who write a program for each student, you will be able to make your
              first sketch after the first lesson.
            </p>
            <Button text="Get started" size="m" />
          </div>
          <MainSvg />
        </section>
      </div>
      <div className={styles.container}>
        <Skills />
      </div>
      <div className={styles.container}>
        <About />
      </div>
      <div className={styles.container}>
        <Pricing />
      </div>
      <div className={styles.container}>
        <Contact />
      </div>
    </>
  )
}

export default App
