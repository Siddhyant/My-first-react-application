import React, { useState, useEffect } from "react";
import Singleproduct from "./Singleproduct";
import axios from "axios";

const Product = () => {
  // const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [CurCategory, setCurCategory] = useState("");

  const getCategories = async () => {
    // setLoad(true);
    let response = await axios.get("https://dummyjson.com/products/categories");
    setCategories(response.data);
    // setLoad(false);
  };

  const getProduct = async (category) => {
    setCurCategory(category);

    // setLoad(false);
    let response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    console.log(response);
    // let {products} = data
    setProducts(response.data.products);
    // setLoad(false);
  };


  useEffect(() => {
    getCategories();
    getProduct("smartphones");
  }, []);

  return (
    <>
      <div className="hero">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`${CurCategory === category ? "btnactive" : ""}`}
              onClick={() => getProduct(category)}>
              {category}
            </button>
          );
        })}

        {products.map((product, index) => {
          return <Singleproduct product={product} key={index} />;
        })}
      </div>
    </>
  );
};

export default Product;
