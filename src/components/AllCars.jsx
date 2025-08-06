import React from "react";
import Car from "./Car";

export default function AllCars() {
  return (
    <>
      <h2>Our Favorite Cars</h2>
      <div>
        <Car make={"BMW"} model={"3 Series"} year={"2023"} />
        <Car make={"Acura"} model={"TLX"} year={"2021"} />
        <Car make={"Chevy"} model={"Impala"} year={"1972"} />
      </div>
    </>
  );
}
