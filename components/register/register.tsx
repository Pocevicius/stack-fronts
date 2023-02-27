import React,{useState} from "react";
import styles from "../register/registerForm.module.css"
import axios from "axios";
import Router from "next/router";
import LoginInput from "../LoginInput/LoginInput";
import LoginButton from "../LoginButton/LoginButton";

const registerForm=()=>{
    const [email,setEmail]= useState()
    const [password,setPassword]=useState()

    const onClickHandler=()=>{
        console.log(email,password)
    const loginData={email:email,password:password}

    const response=axios.post("http://localhost3002/login")
    console.log("response", response);

    Router.push(`/`)

    const onClickHandler=()=>{
        console.log("medinis")
      }
}
return(
    <div className={styles.main}>
        <div className={styles.inputWrapper}>
        <LoginInput onChange={setEmail} value={email} placeholder="enter email"/>
        <LoginInput onChange={setPassword} value={password} placeholder="enter password"/>
        <div className={styles.loginWrapper}>
        <LoginButton onClick={onClickHandler} text="login" />
        </div>

        </div>
    </div>
)
}
export default registerForm