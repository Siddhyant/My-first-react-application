import React, {useState, useEffect} from 'react'
import "./Mypractice.css"

const Mypractice = () => {
    const [count, setCount] = useState(0);

    const increase=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    }
    // useEffect(()=>{
    //     console.log("increase")
    // })
    // function Mypractice(){
    //   const[count,setCount]=useState(0);
    //   function increase (){
    //     if(count<10)
    //     {
    //       setCount(Number(count)+1);
    //     }
    //   };
    //   function decrement(){
    //     if(count>0)
    //  {
    //   setCount(count - 1);
    //  }        
    // }
    // function handleChange  (e){
    //   setCount(e.target.value);
    //  }
  return (
    <>
    <div className="counter">
      <div className="input-btn"style={{margin:"auto",display:"flex",flexDirection:"row"  }}>
        <div className="decerement"  style={{margin:"auto"}}>
          <button style={{margin:"auto"}}onClick={decrement}>-</button>
        </div>
        <div className="header"style={count>0 ? {color:"blue",textAlign:"center"} : {color:"red",textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>{count}</h1>
        </div>        
        <div className='increment'style={{margin:"auto"}}>
          <button style={{margin:"auto"}}onClick={increase}>+</button>
        </div>           
      </div> 
    </div>    
    </>
    // <>
    // <div className="counter">
    //   <div className="input-btn">
    //     <div className="increment">
    //       <button class="btn-one" type='button' onclick={increase}>+</button>
    //     </div>
    //     <input type='text'class="count" value={count} onChange={handleChange}/>
    //     <div className="decrement">
    //   <button class="btn-two" type='button' onclick={decrement}>-</button>
    //   </div>
    //   </div>
    // </div>
    // </>
    
  )
}

export default Mypractice