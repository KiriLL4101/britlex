import cn from 'classnames'

import { Button } from '../Button/Button'

import { ReactComponent as SpeakingSvg } from '../../assets/speaking.svg'
import { ReactComponent as WritingSvg } from '../../assets/writing.svg'
import { ReactComponent as ReadingSvg } from '../../assets/reading.svg'
import { ReactComponent as ListeningSvg } from '../../assets/listening.svg'

import styles from './Skills.module.css'

export const Skills = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills}>
        <div className={cn(styles.card, styles.speak)}>
          <SpeakingSvg />
          <h2 className={styles.subtitle}>Speaking</h2>
          <p className={styles.description}>
            Improve your English skills and confidence. Live classes and interactive lessons online.
            20% extra free for a limited time only <br /> <br /> Learn English online and improve
            your skills through our high-quality courses and resources – all designed for adult
            language learners.
          </p>
          <Button text="Learn more" size="s" />
        </div>
        <div className={cn(styles.card, styles.write)}>
          <WritingSvg />
          <h2 className={styles.subtitle}>Writing</h2>
          <p className={styles.description}>
            One of the most important and extensive areas of natural science, the science that
            studies substances, also their composition
          </p>
          <Button text="Learn more" size="s" />
        </div>
        <div className={cn(styles.card, styles.read)}>
          <ReadingSvg />
          <h2 className={styles.subtitle}>Reading</h2>
          <p className={styles.description}>
            Perception and response actions of the user resulting from the use and/or upcoming use
            of the product, system or service
          </p>
          <Button text="Learn more" size="s" />
        </div>
        <div className={cn(styles.card, styles.listen)}>
          <ListeningSvg />
          <div className={styles.block}>
            <h2 className={styles.subtitle}>Listening</h2>
            <p className={styles.description}>
              Here you can find activities to practise your listening skills. Listening will help
              you to improve your understanding
            </p>
            <Button text="Learn more" size="s" />
          </div>
        </div>
      </div>
    </div>
  )
}
