// import React, {useState, useEffect} from 'react'
// import "./Stopwatch.css"

// const Stopwatch = () => {
//     // const [count, setCount] = useState(0);

//     // const reset =()=>{
//     //     setCount(0);
//     // };
//     // useEffect(()=>{
//     //     setTimeout(()=>{
//     //         setCount(count+1);
//     //     },1000);
//     // },[count])
//     const[min,setmin]=useState(0)
//     const[sec,setsec]=useState(0)

//     let timer;
//     useEffect(()=>{
//       console.log(sec)
//       timer=setTimeout(()=>{
//         if(sec===59){
//           setmin(min+1)
//           setsec(0)
//         }
//         else setsec(sec+1)
//       },1000);
//       // eslint-disable-next-line 
//     },[sec])
//     const reset = ()=>{
//       clearTimeout(timer)
//       setmin(0)
//       setsec(0)
//     }
  

//   return (
//     // <div style={count>0 ? {color:"green",textAlign:"center"} : {color:"red",textAlign:"center"}}>
//     //     <div style={{margin:"auto",display:"flex",flexDirection:"column"}}>
//     //       <h1 style={{textAlign:"center"}}>{count}</h1>
//     //       {/* <div className='btnDiv'style={{margin:"auto"}}> */}
//     //       {/* <button style={{margin:"auto"}}onClick={reset}>reset count</button> */}
//     //       {/* </div> */}
//     //     </div>
//     // </div>
//     <div className="mystopwat">
//       <div className="stopwatch-one" >
//         <div className="timmer" style={{margin:"auto",flexDirection:"colum"}}>
//           <h3 style={{textAlign:"center"}}>Timer</h3>
//         </div>
//         <div className="stopwatch-two" style={{textAlign:"center" ,display:"flex" ,flexDirection:"row"}}>
//           <div className="min"style={{textAlign:"center"}}>
//             <p>Min</p>
//             <p>{min <10 && 0}{min}</p>
//           </div>
//           <div className="Sec"style={{textAlign:"center"}}>
//           <p>Sec</p>
//           <p>{sec <10 && 0}{sec}</p>
//         </div>
//         <div className="reset">
//           <button onClick={reset}>Reset</button>
//         </div>
//       </div> 
//     </div>
//     </div>
//   )
// }

// export default Stopwatch


import React from 'react'

const Stopwatch = () => {
  return (
    <div>Stopwatch</div>
  )
}

export default Stopwatch