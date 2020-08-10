import React from "react";
import "./FlipBox.css";

/**
 * Creates a FlipBox filled with content from props parameters.
 *
 * @param props.margin Sets the margin around the (Front+Back) FlipBox content
 * @param props.frontBackgroundImage Sets the background-image of the (front) FlipBox
 * @param props.backBackgroundImage Sets the background-image of the (back) FlipBox
 * @param props.frontImage Link to an image that is displayed on the front of the Flipbox
 * @param props.frontTitle Sets the text of the (front) FlipBox title
 * @param props.frontTitleColor Sets the color of the (front) FlipBox title
 * @param props.frontText Sets the main copy of the (front) FlipBox
 * @param props.frontParagraphColor Sets the color of the main copy of the (front) FlipBox
 * @param props.backTitle Sets the text of the (back) FlipBox title
 * @param props.backTitleColor Sets the color of the (back) FlipBox title
 * @param props.backText Sets the main copy of the (back) FlipBox
 * @param props.backParagraphColor Sets the color of the main copy of the (back) FlipBox
 * @param props.col Sets the style of the FlipBoxes to match the number of FlipBoxes in the row
 * @param props.buttonText Sets the text inside the button
 * @param props.buttonStyle sets the CSS style of the (back) FlipBox button
 * @param props.buttonLink sets the link of the (back) FlipBox button
 */
export default function FlipBoxItem(props) {
  if (props.backBackgroundImage)
    var backBackgroundImage = "url(" + props.backBackgroundImage + ")";
  if (props.frontBackgroundImage)
    var frontBackgroundImage = "url(" + props.frontBackgroundImage + ")";
  var containerStyle = "";
  var frontImageDisplay = props.frontImage ? "inline" : "none";
  var backButtonDisplay = props.buttonText ? "inline" : "none";
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
          break;
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
            backgroundImage: backBackgroundImage,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: props.margin }}>
            <h2 style={{ color: props.backTitleColor }}>{props.backTitle}</h2>
            <p style={{ color: props.backParagraphColor }}>{props.backText}</p>
            <div style={{ display: backButtonDisplay }}>
              <a href={props.buttonLink}>
                <button className={props.buttonStyle}>
                  {props.buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
