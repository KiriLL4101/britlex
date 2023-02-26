import { ReactComponent as CourseSvg } from '../../assets/course.svg'
import { ReactComponent as LessonSvg } from '../../assets/lesson.svg'
import { ReactComponent as WebinarSvg } from '../../assets/webinar.svg'

import styles from './Pricing.module.css'

export const Pricing = () => {
  return (
    <div className={styles.root}>
      <h2>Pricing</h2>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <CourseSvg />
          <h3>Self-study online course</h3>
          <p>
            Start learning English online in live classes with qualified EC teachers and students
            from all over the world.
          </p>
          <div className={styles.price}>
            <span>£5.99</span>
            per month
          </div>
        </div>
        <div className={styles.card}>
          <LessonSvg />
          <h3>Live online classes</h3>
          <p>Interactive group classes with expert teachers. Free 7-day trial</p>
          <div className={styles.price}>
            <span>£12.99</span>
            per month
          </div>
        </div>
        <div className={styles.card}>
          <WebinarSvg />
          <h3>Personal Tuition</h3>
          <p>Online one-to-one English tutoring – enjoy our first session for only $1</p>
          <div className={styles.price}>
            <span>£20.99</span>
            per month
          </div>
        </div>
      </div>
    </div>
  )
}
