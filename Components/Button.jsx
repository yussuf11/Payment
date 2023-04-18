import React from 'react'
import styles from '../Website/style'

const Button = () => {
  return (
   <button type='button' className={`py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
    Get Started
   </button>
  )
}

export default Button