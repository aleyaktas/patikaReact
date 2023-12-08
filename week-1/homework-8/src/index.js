import React from 'react'
import styles from './styles.module.css'

export const ButtonComponent = ({ text, type, ...props }) => {
  const buttonClass = `${styles.button} ${styles[type]}`
  return (
    <button className={buttonClass} {...props}>
      {text}
    </button>
  )
}
