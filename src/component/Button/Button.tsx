import { type FC } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

interface ButtonProps {
  text: string
  size?: 'm' | 'l'
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ text, size = 'm', variant = 'primary' }) => {
  return <button className={cn(styles.button, styles[size], styles[variant])}>{text}</button>
}
