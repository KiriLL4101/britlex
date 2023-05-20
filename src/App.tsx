import { Skills } from './component/Skills/Skills'
import { About } from './component/About/About'
import { Pricing } from './component/Pricing/Pricing'
import { Contact } from './component/Contact/Contact'
import { Footer } from './component/Footer/Footer'
import { Header } from './component/Header/Header'
import { Button } from './component/Button/Button'

import { ReactComponent as MainSvg } from './assets/main.svg'

import styles from './app.module.css'

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
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
      <div className={styles.container}>
        <Footer />
      </div>
    </>
  )
}

export default App
