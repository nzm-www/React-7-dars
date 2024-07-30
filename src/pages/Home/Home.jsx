// import React, { useState, useEffect } from "react";
// import Card from "../../Components/Card/Card";
// import "./Home.css";

// function Home() {
//   const [products, setProducts] = useState([]);

//   async function getDataAPI(url) {
//     try {
//       const resp = await fetch(url);
//       let data = [];
//       if (resp.status == 200) {
//         data = await resp.json();
//       }
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(function () {
//     getDataAPI("https://cars-pagination.onrender.com/products")
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="container">

//       {products.length > 0 &&
//         products.map(function (product, index) {
//           return <Card key={index} data={product} />;
//         })}
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("известный");

  async function getDataAPI(url) {
    try {
      const resp = await fetch(url);
      let data = [];
      if (resp.status === 200) {
        data = await resp.json();
      }
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    getDataAPI("https://cars-pagination.onrender.com/products")
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <>
      <div className="category-select">
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="известный">известный</option>
          <option value="средний">Cредний</option>
          <option value="не популярен">не популярен</option>
        </select>
      </div>
      <div className="container">
        {products.length > 0 &&
          products.map((product) => (
            <Card key={product.id || product.name} data={product} />
          ))}
      </div>
    </>
  );
}

export default Home;
