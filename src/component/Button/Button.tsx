import { type FC } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

interface ButtonProps {
  text: string
  size?: 's' | 'm'
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ text, size = 's', variant = 'primary' }) => {
  return <button className={cn(styles.button, styles[size], styles[variant])}>{text}</button>
}
