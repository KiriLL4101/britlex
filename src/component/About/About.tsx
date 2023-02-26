import { ReactComponent as AboutSvg } from '../../assets/about.svg'

import styles from './About.module.css'

export const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.about}>
        <h2>About Us</h2>
        <p>
          The model offers a framework for discussing problems related to the user's experience, as
          well as possible ways and means of solving them. Application development begins at the top
          level (strategy), where the future software product is described quite abstractly from the
          point of view of the expectations of both users and the customer.
        </p>
        <div className={styles.stats}>
          <span>800</span>
          <span>18</span>
          <span>6</span>
          <p>Pupils</p>
          <p>Teachers</p>
          <p>Foreign languages</p>
        </div>
      </div>

      <AboutSvg />
    </div>
  )
}
