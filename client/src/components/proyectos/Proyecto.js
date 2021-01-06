import React from "react";

export default function Proyecto({pro}) {
  return (
    <li>
      <button type="button"> {pro.nombre} </button>
    </li>
  );
}
