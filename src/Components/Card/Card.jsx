// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Card.css";

// function card() {
//   function handleNavigate() {
//     const navigate = useNavigate();

//     navigate(`users/${id}`);
//   }
//   const [users, setUsers] = useState([]);
//   async function getDataFromApi(url) {
//     try {
//       const respons = await fetch(url);
//       let data = [];
//       if (respons.status == 200) {
//         data = await respons.json();
//       }
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

// useEffect(() => {
//   getDataFromApi("https://cars-pagination.onrender.com/products")
//     .then((data) => {
//       setUsers(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

//   return (
// <div className="container">
//   <div className="wrapper">
//     {users.length > 0 &&
//       users.map(function (user, index) {
//         return (
//           <div key={index} className="wrap">
//             <div className="card">
//               <div className="card-inner">
//                 <div className="card-front">
//                   <p>Front Side</p>
//                 </div>
//                 <div onClick={handleNavigate} className="card-back">
//                   <div className="miniwrap">
//                     <img className="img" src={user.image} alt="" />
//                     <b
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "25px",
//                         paddingTop: "20px",
//                       }}
//                     >
//                       <h5 className="id">ID:{user.id}</h5>

//                       <h2>Name: {user.name}</h2>
//                     </b>
//                     <div className="prices">
//                       <p>newPrice: {user.newPrice}</p>
//                       <p>oldPrice: {user.oldPrice}</p>
//                     </div>
//                     <h2 className="comments">Comments: {user.comments}</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//   </div>
// </div>
//   );
// }

// export default card;

import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(porps) {
  const { image, name, id, oldPrice, newPrice, comments } = porps.data;

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`products/${id}`);
  }

  return (
    <div className="card" onClick={handleNavigate}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>Front Side</p>
          </div>
          <div className="card-back">
            <div className="wrap">
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <img src={image} alt="" />
                <b style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Id: {id}</h5>
                  <h2> Name: {name}</h2>
                  <b>
                    <h3>newPrice: {newPrice}</h3>
                    <h3> oldPrice: {oldPrice}</h3>
                  </b>
                </b>
              </div>
              <h2 className="comments">Comments: {comments}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
