import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-5 mx-auto my-10'>
      {
        products?.map(product => <ProductCard product={product}/>)
      }
    </div>
  );
};

export default Home;
