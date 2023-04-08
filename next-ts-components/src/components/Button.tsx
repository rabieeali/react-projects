import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'solid', disabled, ...props }) => {
  const baseStyles = 'py-2 px-4 rounded-lg font-medium transition duration-150 ease-in-out'
  const solidStyles = 'text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
  const outlineStyles = 'text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 active:text-white'

  const styles = variant === 'outline' ? outlineStyles : solidStyles

  return (
    <button
      type="button"
      className={`${baseStyles} ${styles}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
