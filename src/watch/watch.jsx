import React from 'react'
import styles from "./watch.module.css"
import { useState , useEffect} from 'react'

const Stopwatch = () => {
 const [isRunning,setIsRunning] = useState(false)
 const [elapsedTime,setElapsedTime] = useState(0)
  const startStop = () => {
     setIsRunning(!isRunning)
  } 
  const reset = () => {
    setIsRunning(false)
     setElapsedTime(0)
  }

  const timeSetting = (sec) => {
     let min = Math.floor(sec / 60)
     let remSec = sec % 60
     return `${min} : ${remSec < 10 ? "0" : ""}${remSec}`
  }
   useEffect(()=>{
    let intervalId
    if (isRunning){
     intervalId = setInterval(()=>{
       setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
     }, 1000);
    } else {
      clearInterval(intervalId)
     }
     return ()=> clearInterval(intervalId)
   },[isRunning])
 return (
    <div className={styles.parent}>
        <h1>Stopwatch</h1>
        <p>Time: {timeSetting(elapsedTime)}</p>
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset} className={styles.buttonSpace}>Reset</button>
    </div>
  )
}
export default Stopwatch

// import React, { useEffect, useState } from 'react'

// const Watch = () => {
//   const [startStop,setStartStop] = useState(false)
//   const [elapsedTime,setElapsedTime] = useState(0)
  
//   const reset = () => {
//         setStartStop(false)
//         setElapsedTime(0)
//   }
//   const handleChange = () => {
//     setStartStop(!startStop)
//   }
//   useEffect(()=>{
//     let intervalId
//     if (startStop){
//      intervalId = setInterval(()=>{
//         setElapsedTime((prevVAlue) => prevVAlue + 1)
//      },1000)
//     }else{
//      clearInterval(intervalId)
//     }
//     return ()=> clearInterval(intervalId)
//   },[startStop])
//   const displayMinSec = (sec) => {
//     let min = Math.floor(sec / 60)
//     let remSec = sec % 60
//     return `${min} : ${remSec < 10 ? "0" : ""}${remSec}`
//   } 
//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time{displayMinSec(elapsedTime)}</p>
//       {startStop ?<button onClick={handleChange}>Stop</button>:
//       <button onClick={handleChange}>Start</button> }
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Watch