import axios from 'axios'
import { useEffect,useState } from 'react'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import LoginButton from '@/components/LoginButton/LoginButton'
import Button from '@/components/button/button'
import Router from 'next/router'


export default function Home() {

  const onClickHandler=()=>{
    console.log("medinis")
  }

  const clickedLogin=()=>{
    Router.push(`/login`)
}
const clickedSign=()=>{
    console.log("clicked sign up")
}

  return (
    <>
    <Navbar/>
    <div className={styles.btnWrapper}>
      <LoginButton onClick={onClickHandler} text="Ask Question"/>
    </div>
    <div className={styles.btnWrapper}>
            <Button onClick={clickedLogin} text='Log in'/>
            <Button onClick={clickedSign} text='Sign up'/>

         </div>
    <div className={styles.questionsWrapper}>
    </div>
    
    </>
  )
}
