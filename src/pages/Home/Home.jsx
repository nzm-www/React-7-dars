import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  async function getDataAPI(url) {
    try {
      const resp = await fetch(url);
      let data = [];
      if (resp.status == 200) {
        data = await resp.json();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getDataAPI("https://cars-pagination.onrender.com/products")
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
    
      {products.length > 0 &&
        products.map(function (product, index) {
          return <Card key={index} data={product} />;
        })}
    </div>
  );
}

export default Home;
