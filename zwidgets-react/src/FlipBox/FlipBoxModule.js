import React from "react";
import "./FlipBox.css";

export default function FlipBoxModule(props) {
  const titleArray = props.title.split(",");
  const isImage =
    titleArray.length > 0 && titleArray[0] === "img" ? true : false;

  if (isImage) {
    return <img alt="Link Not Working" src={titleArray[1]} />;
  }

  return <div className="flipBoxContainer">{props.title}</div>;
}
