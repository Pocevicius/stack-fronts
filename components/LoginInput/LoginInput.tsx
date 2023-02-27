import React from "react";
import styles from "../LoginInput/LoginInput.module.css"

type InputType={
    placeholder: string
    value:any
    onChange: any
}

const LoginInput: React.FC<InputType>=({placeholder,value,onChange})=>{

    return(
        <input value={value} placeholder={placeholder} className={styles.main} onChange={(login)=>onChange(login.target.value)}/>
    )
}
export default LoginInput