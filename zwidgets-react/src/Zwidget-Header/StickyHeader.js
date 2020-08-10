import React, { useState, useEffect } from "react";
import "./StickyHeader.css";

export default function StickyHeader(props) {
  var [stickyActivated, setStickyActivated] = useState(false);
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const stickyHeightShrink = 10;

  const scrollListener = () => {
    winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll >= props.switchValue) {
      setStickyActivated(true);
    } else {
      setStickyActivated(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    // eslint-disable-next-line
  }, []);

  if (stickyActivated) {
    return (
      <>
        <div
          className="nonStickyHeaderHeight"
          style={{
            width: "100%",
            backgroundColor: props.backgroundColor,
          }}
        ></div>
        <header
          className="stickyHeader"
          style={{
            position: "fixed",
            zIndex: "1",
            top: "0px",
            width: "100%",
            backgroundColor: props.backgroundColor,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: props.containerWidth,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              height: "100%",
            }}
          >
            <div className="headerLogo">
              <img
                style={{ height: props.stickyHeight - stickyHeightShrink }}
                src={props.imgSource}
              />
            </div>
            <div className="menuItems">
              {props.menuItems.map((item) => {
                return (
                  <a
                    className={
                      item.selected ? "selectedMenuItem" : "unselectedMenuItem"
                    }
                    style={{ marginLeft: props.menuSpacing }}
                    href={item.link}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <header
        className="nonStickyHeader"
        style={{
          width: "100%",
          backgroundColor: props.backgroundColor,
        }}
      >
        <div
          style={{
            width: props.containerWidth,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            height: "100%",
          }}
        >
          <div className="headerLogo">
            <img style={{ height: props.stickyHeight }} src={props.imgSource} />
          </div>
          <div className="menuItems">
            {props.menuItems.map((item) => {
              return (
                <a
                  className={
                    item.selected ? "selectedMenuItem" : "unselectedMenuItem"
                  }
                  style={{ marginLeft: props.menuSpacing }}
                  href={item.link}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
      </header>
    );
  }
}
