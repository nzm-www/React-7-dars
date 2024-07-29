// import React from "react";
// import { useParams } from "react-router-dom";
// import { useState } from "react";

// const [details, setDetails] = useState([]);
// function Detels() {
//   const params = useParams();
//   console.log(6, params.id);
//   async function getDetailsAPI(url) {
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
//   getDetailsAPI(`https://cars-pagination.onrender.com/products/${params}`)
//     .then((data) => {
//       setDetails(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log(details);
//   return (
//     <div>
//       <h2>{details.name}</h2>
//     </div>
//   );
// }

// export default Detels;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detels.css";

function Detels() {
  const { id } = useParams();
  const [data, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(data);
  return (
    <div className="container">
      <div>
        <img src={data.image} alt="" />
        <div>
          <h5>Id: {data.id}</h5>
          <h3> Name: {data.name}</h3>
        </div>
        <b>
          <h3>newPrice: {data.newPrice}</h3>
          <h3> oldPrice: {data.oldPrice}</h3>
        </b>
        <h2>Comments: {data.comments}</h2>
      </div>
    </div>
  );
}

export default Detels;
