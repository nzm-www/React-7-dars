import React from "react";
import { useParams } from "react-router-dom";

function ContactDetels() {
  const params = useParams();
  console.log(params);
  return <div>ContactDetels</div>;
}

export default ContactDetels;
