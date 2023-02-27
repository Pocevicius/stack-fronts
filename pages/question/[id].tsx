import axios from "axios"
import { useEffect ,useState} from "react"
import{useRouter} from "next/router"
import Navbar from "components/navbar/navbar"
import styles from"./question.module.css"



export default function questionPage() {
    const[Question,setQuestion]=useState<any>()
  
    const router = useRouter()
  
    const fetchQuestion = async () =>{
      const Question = await axios.get(`http://stackback-nrn3.onrender.com/${router.query.id}`)
      setQuestion(Question.data)
      console.log(Question.data)
    }
  
    useEffect(()=>{
      if(router.query.id){
      fetchQuestion()
    }},
    [router.query])

    return (
      <>
       <div>
        <Navbar/>
        {Question&&
        <div className={styles.main}>
          <h1>{Question.title}</h1>
          </div>
          }
       </div>
      </>
    )
  }