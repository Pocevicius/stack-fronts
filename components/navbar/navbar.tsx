import React from 'react'
import Button from '../button/button';
import styles from "./navbar.module.css";
import axios from 'axios';
import Router from 'next/router';




const clickedLogin=()=>{
    Router.push(`/login`)
}
const clickedSign=()=>{
    console.log("clicked sign up")
}

const Navbar: React.FC = ({
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        Stack never flow
      </div>
      <div className={styles.btnWrapper}>
            <Button onClick={clickedLogin} text='Log in'/>
            <Button onClick={clickedSign} text='Sign up'/>

         </div>
    </div>
  )
}
export default Navbar