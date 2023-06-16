// import React, { useState } from 'react'
// import RegularBtn from './RegularBtn'

// const TextUtilsForm = () => {
//     const [inputValue,setInptValue] = useState("")
//     function changeToUpperCase(){
//         setInptValue(inputValue.toUpperCase())
//     }
//     function changeToLowerCase(){
//         setInptValue(inputValue.toLowerCase())
//     }
//     function trimSpaces(){
//         let regx =/\s+/g
//         setInptValue(inputValue.replace(regx," "))
//     }
//     function handleChange(e){
//         setInptValue(e.target.value);
//     }
    
//   return (
// <div className='w-full px-60 mt-10'>
//    <div class="mb-3">
//     <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//     <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
//     {/* <Regular textarea handleFunc={handleChange} inputValue={inputValue}/> */}
//   </div>
//   <div className='flex gap-3 mt-7'>
//     <RegularBtn handleFunc ={changeToUpperCase} buttonCopy=" Covert to UpperCase" color="blue" />
//     <RegularBtn handleFunc ={changeToLowerCase} buttonCopy=" Covert to LowerCase" color="red" />
//     <RegularBtn handleFunc ={changeToUpperCase} buttonCopy=" Remove all extra spaces" color="gray" />
    
//   </div>
// </div>
//   )
// }

// export default TextUtilsForm