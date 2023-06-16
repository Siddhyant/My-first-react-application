import React from "react";
import "./Employes.css";

const SingleEmployes = ({ data }) => {
  // const { src,name, age, gender } = data;
  console.log(data);

  return (
    // <div>
    //      <p>img :{src}</p>
    //     <p>Name : {name}</p>
    //     <p>Age : {age}</p>
    //     <p>Gender : {gender}</p>
    // </div>
    <div className="template">
      <div className="cards">
        <div className="imageS">
          <img src={`${data.src}`} />
        </div>
        <div class="name">
          {/* <label for="">Name:</label> */}
          <p>Name:{data.name}</p>
          <p>Dialouge:{data.dia}</p>
          <p>Gender:{data.gender}</p>
        </div>
        {/* <div class="dig"> */}
          {/* <label></label> */}
          
        {/* </div> */}
        {/* <div class="gender">Gender:</div> */}
        
      </div>
    </div>
  );
};

export default SingleEmployes;
