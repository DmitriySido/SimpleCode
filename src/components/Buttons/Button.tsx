import React, { ReactNode } from 'react';
import './Button.scss'


type ButtonProps = {
  children: ReactNode,
  moreClass?: string,
}

const Button = ({ children, moreClass }: ButtonProps) => {
  return <button className={'button ' + moreClass}>{children}</button>
}

export default Button;