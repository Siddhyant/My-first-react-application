import React from "react";
// import Product from "./Product";

const Singleproduct = ({ product }) => {
  // const id =product.id;
  // const title= product.title;
  // const thumbnail=product.thumbnail;
  // const description=product.description;
  // console.log(id,title,thumbnail,description);
  const { id, title, thumbnail, description } = product;

  return (
    <div>
      <div className="Myimg">
        <img src={thumbnail} alt="productImg"/>
      </div>
      <div>
        <p>id:{id}</p>
        <p>title:{title}</p>
        <p>description:{description}</p>
      </div>
    </div>
  );
};

export default Singleproduct;
