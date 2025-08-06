import React from "react";

export default function Car({ make, model, year }) {
  return (
    <div className="car-div">
      <p>
        <strong>Make: </strong>
        {make}
      </p>

      <p>
        <strong>Model: </strong>
        {model}
      </p>

      <p>
        <strong>Year: </strong>
        {year}
      </p>
    </div>
  );
}
