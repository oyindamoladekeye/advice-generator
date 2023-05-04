import './App.css'
import patterndivider from './assets/pattern-divider-desktop.svg'
import dice from "./assets/icon-dice.svg"
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [adviceId, setAdviceId] = useState("1");
  const [advice , setAdvice] = useState("Take a leap");
   const fetchId = ()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then((res)=>{
      console.log(res.data);
      setAdviceId(res.data.slip.id)
    })
  }
   const fetchAdvice =()=>{
    axios.get("	https://api.adviceslip.com/advice")
    .then((res)=>{
      console.log(res.data);
      setAdvice(res.data.slip.advice)
    })
   }

   function handleClicks(){
    fetchAdvice();
    fetchId();
   }
  return (
    <main>
      <div className='advice-main'>
        <p className='advice-tag'>A D V I C E # {adviceId} </p>
        <p className='advice'>"{advice}"</p>
        <div className="pattern"><img src={patterndivider} alt="" /></div>
        <div className="dice" onClick={handleClicks}><img src={dice} alt="" /></div>
      </div>
    </main>
  )
}

export default App;
