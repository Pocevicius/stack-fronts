import React from 'react'
import styles from "./LoginButton.module.css";

type ButtonType={
  text: string;
  onClick: ()=> void;
}

const LoginButton: React.FC<ButtonType> = ({text,onClick}) => {
  return (
   <button onClick={onClick} className={styles.main}>{text}</button>
  )
}
export default LoginButton