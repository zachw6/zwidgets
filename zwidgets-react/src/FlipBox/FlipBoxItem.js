import React from "react";
import "./FlipBox.css";

export default function FlipBoxItem(props) {
  if (props.backBackgroundImage)
    var backBackgroundImage = "url(" + props.backBackgroundImage + ")";
  if (props.frontBackgroundImage)
    var frontBackgroundImage = "url(" + props.frontBackgroundImage + ")";
  var containerStyle = "";
  var frontImageDisplay = props.frontImage ? "inline" : "none";
  var colMarginLeft = "";
  var colMarginRight = "";

  switch (props.colNum) {
    default:
      containerStyle = "flipBoxContainer-col-1";
      break;
    case 1:
      containerStyle = "flipBoxContainer-col-1";
      break;
    case 2:
      containerStyle = "flipBoxContainer-col-2";
      props.side === "left"
        ? (colMarginRight = "5px")
        : (colMarginLeft = "5px");
      break;
    case 3:
      containerStyle = "flipBoxContainer-col-3";
      switch (props.side) {
        default:
          break;
        case "left":
          colMarginRight = "10px";
          break;
        case "right":
          colMarginLeft = "10px";
        case "middle":
          break;
      }
      break;
  }

  return (
    <div
      className={containerStyle}
      style={{ marginLeft: colMarginLeft, marginRight: colMarginRight }}
    >
      <div
        className="flipBoxFront"
        style={{ backgroundImage: frontBackgroundImage }}
      >
        <div style={{ padding: props.margin }}>
          <img
            alt={props.frontImageAlt}
            src={props.frontImage}
            style={{ display: frontImageDisplay }}
          />
          <h2 style={{ color: props.frontTitleColor }}>{props.frontTitle}</h2>
          <p style={{ color: props.frontParagraphColor }}>{props.frontText}</p>
        </div>
        <div
          className="flipBoxBack"
          style={{
            paddingTop: props.margin,
            backgroundImage: backBackgroundImage,
          }}
        >
          <h2 style={{ color: props.backTitleColor }}>{props.backTitle}</h2>
          <p style={{ color: props.backParagraphColor }}>{props.backText}</p>
        </div>
      </div>
    </div>
  );
}
