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
import { IoArrowBackSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import "./Detels.css";

function Detels() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }

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
    <div className="containerr">
      <div className="wrapp">
        <img src={data.image} alt="" />
        <div className="chap">
          <div className="ssss">
            <h5>Id: {data.id}</h5>
            <h2> Name: {data.name}</h2>
            <b>
              <h3>newPrice: {data.newPrice}</h3>
              <h3> oldPrice: {data.oldPrice}</h3>
            </b>
            <h2>Comments: {data.comments}</h2>
          </div>
          <button  onClick={handleNavigate}>
            <a>B A C K  <IoArrowBackSharp />
</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detels;
