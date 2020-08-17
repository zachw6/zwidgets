import React, { useState, useEffect } from "react";
import "./DropDown.css";

/**
 * Creates a toggleable DropDown with text.
 *
 * @param props.num The ordered-number of which DropDown this is on the page.
 * @param props.headerBackgroundColor Sets the background color of the header.
 * @param props.headerFontColor Sets the font color of the header.
 * @param props.contentBackgroundColor Sets the background color of the content section.
 * @param props.contentFontColor Sets the font color of the text in the content section.
 * @param props.contentFontSize Sets the font size of the text in the content section.
 * @param props.title The title of the DropDown.
 * @param props.titleSize Sets the font-size of the title of the DropDown.
 * @param props.content The text within the DropDown.
 * @param props.paddingTop Top padding of the DropDown.
 * @param props.paddingBottom Bottom padding of the DropDown.
 * @param props.marginTop Top margin of the DropDown.
 * @param props.marginBottom Bottom margin of the DropDown.
 */
export default function DropDown(props) {
  var paddingTop = props.paddingTop ? props.paddingTop + "px" : "0px";
  var paddingBottom = props.paddingBottom ? props.paddingBottom + "px" : "0px";
  const numPaddingTop = props.paddingTop;
  const numPaddingBot = props.paddingBottom;
  const [droppedDown, setDroppedDown] = useState(false);
  const [width, setWidth] = useState(0);

  const resize = () => {
    resizeListener(droppedDown);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line
  }, [width, droppedDown]);

  useEffect(() => {
    const dropDown = document.querySelectorAll(".dropDownContent")[
      props.num - 1
    ];
    dropDown.style.display = "flex";
  }, [props.num]);

  useEffect(() => {
    const dropDown = document.querySelectorAll(".dropDownContent")[
      props.num - 1
    ];

    if (droppedDown) {
      dropDown.style.paddingBottom = paddingBottom;
      dropDown.style.paddingTop = paddingTop;
      dropDown.style.maxHeight =
        parseInt(
          document.defaultView.getComputedStyle(
            dropDown.querySelectorAll("div")[2]
          ).height
        ) +
        (props.paddingTop ? props.paddingTop : 0) +
        (props.paddingBottom ? props.paddingBottom : 0) +
        "px";
    } else {
      dropDown.style.maxHeight = 0;
      dropDown.style.paddingBottom = 0;
      dropDown.style.paddingTop = 0;
    }
  }, [
    droppedDown,
    props.num,
    props.paddingBottom,
    props.paddingTop,
    paddingBottom,
    paddingTop,
  ]);

  function resizeListener(droppedDown) {
    const dropDown = document.querySelectorAll(".dropDownContent")[
      props.num - 1
    ];

    if (droppedDown === true) {
      dropDown.style.paddingBottom = paddingBottom;
      dropDown.style.paddingTop = paddingTop;
      dropDown.style.maxHeight =
        parseInt(
          document.defaultView.getComputedStyle(
            dropDown.querySelectorAll("div")[2]
          ).height
        ) +
        numPaddingTop +
        numPaddingBot +
        "px";
    }
  }

  function toggle() {
    if (droppedDown === true) {
      setDroppedDown(false);
      console.log("dropped down should be false");
    } else {
      setDroppedDown(true);
      console.log("dropped down should be true");
    }
  }

  return (
    <div className="dropDownContainer">
      <div
        onClick={toggle}
        className="dropDownHeader"
        style={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          color: props.headerFontColor,
          backgroundColor: props.headerBackgroundColor,
          padding: props.titlePadding,
          fontSize: props.titleSize,
        }}
      >
        {props.title}
      </div>
      <div
        className={"dropDownContent " + props.num}
        style={{
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          color: props.contentFontColor,
          backgroundColor: props.contentBackgroundColor,
          fontSize: props.contentFontSize,
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ width: props.marginLeft }}></div>
        </div>
        <div style={{ height: "100%" }}>
          <p>{props.content}</p>
        </div>
        <div style={{ height: "100%" }}>
          <div style={{ width: props.marginRight }}></div>
        </div>
      </div>
    </div>
  );
}
