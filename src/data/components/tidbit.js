import React from "react"

export default function Tidbit(props) {
  return (
    <div className="grid-item">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h3>{props.subheading}</h3>
    </div>
  );
}
