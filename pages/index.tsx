import axios from 'axios'
import { useEffect,useState } from 'react'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/navbar'
import Questions from '@/components/questions/questions'
import LoginButton from '@/components/LoginButton/LoginButton'


export default function Home() {

  const onClickHandler=()=>{
    console.log("medinis")
  }

  return (
    <>
    <Navbar/>
    <div className={styles.btnWrapper}>
      <LoginButton onClick={onClickHandler} text="Ask Question"/>
    </div>
    <div className={styles.questionsWrapper}>
    </div>
    
    </>
  )
}
