import React from 'react';
import data from '../data/Employee.json'
import SingleEmployes from './SingleEmployes';


const EmployesDetails = () => {

  return (
   <>
    {
      data.map((elem, index)=>{
        return <SingleEmployes data ={elem} key={index}/>
      })
    }
   </>
  )
}

export default EmployesDetails