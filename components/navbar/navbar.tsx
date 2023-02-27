import React from 'react'
import Button from '../button/button';
import styles from "./navbar.module.css";
import axios from 'axios';
import Router from 'next/router';


const Navbar: React.FC = ({
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        Stack never flow
      </div>
    </div>
  )
}
export default Navbar