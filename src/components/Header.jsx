import React from "react";

export default function Header() {
  const date = new Date();
  const dateString = date.toDateString();

  return (
    <header>
      <h1>Introduction To React</h1>
      <p>
        Today's date: <span>{dateString}</span>
      </p>
    </header>
  );
}
