import React from "react";
import FlipBoxItem from "./Zwidget-FlipBox/FlipBoxItem";
import StickyHeader from "./Zwidget-Header/StickyHeader";
import DropDown from "./Zwidget-DropDown/DropDown";

function App() {
  return (
    <div className="App">
      <StickyHeader
        backgroundColor="#f0f0f0"
        nonStickyHeight={70}
        stickyHeight={50}
        switchValue={80}
        containerWidth="80%"
        menuItemsColor="#101010"
        menuSpacing="20px"
        menuItems={[
          {
            title: "Home",
            link: "https://www.youtube.com",
            selected: true,
          },
          {
            title: "About",
            link: "https://www.youtube.com",
          },
          {
            title: "Contact",
            link: "https://www.youtube.com",
          },
        ]}
        imgSource="https://upload.wikimedia.org/wikipedia/commons/7/72/Little_Mix_Logo_2013.png"
      />
      <div style={{ width: "80%", margin: "60px auto 60px auto" }}>
        <div style={{ marginBottom: 30 }}>
          <DropDown
            num={1}
            title="Dropdown :)"
            titlePadding="10px 0px 10px 30px"
            titleSize="24px"
            paddingTop={20}
            paddingBottom={20}
            marginLeft={20}
            marginRight={20}
            content="Hello my name is Zach and I like potatoes."
            headerBackgroundColor="#101010"
            headerFontColor="#f0f0f0"
            contentBackgroundColor="#f0f0f0"
            contentFontColor="#101010"
            contentFontSize="22px"
          />
        </div>{" "}
        <div style={{ marginBottom: 30 }}>
          <DropDown
            num={2}
            title="Dropdownddddddddddddddddddd
            dddd
            d
            dddddddddddd
            dddddd
            ddddddddddddd
            dddddd
            ddddddd fsafafssa dsffafa adadwsad :)"
            titlePadding="10px 0px 10px 30px"
            titleSize="24px"
            paddingTop={20}
            paddingBottom={20}
            marginLeft={20}
            marginRight={20}
            content="Hello my name is Zach and I like potatoes."
            headerBackgroundColor="#101010"
            headerFontColor="#f0f0f0"
            contentBackgroundColor="#f0f0f0"
            contentFontColor="#101010"
            contentFontSize="22px"
          />
        </div>{" "}
        <div style={{ marginBottom: 30 }}>
          <DropDown
            num={3}
            title="Dropdown :)"
            titlePadding="10px 0px 10px 30px"
            titleSize="24px"
            paddingTop={20}
            paddingBottom={20}
            marginLeft={20}
            marginRight={20}
            content="Hello my name is Zach and I like potatoes."
            headerBackgroundColor="#101010"
            headerFontColor="#f0f0f0"
            contentBackgroundColor="#f0f0f0"
            contentFontColor="#101010"
            contentFontSize="22px"
          />
        </div>
        <FlipBoxItem
          frontTitle="potato"
          colNum={1}
          frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
          backTitle="I really love potatoes. Just thought you should know!"
          backText="Here is the back text."
          backBackgroundImage="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        />
        <FlipBoxItem
          colNum={1}
          frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
          backText="Here is the back text."
          margin="50px"
          backBackgroundImage="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          frontBackgroundImage="https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale"
          frontTitleColor="#ff0000"
          frontParagraphColor="#00ffff"
          frontImage="https://lh3.googleusercontent.com/proxy/U3589xn2SgvUUO4KomaKI8xFd6xccKMaokQEs1PKZ-5RQi96ZF9k_TT7RbDzstQo3I5LE19OcO25lq1onK-f7QrUJbanNVXYWBBJiBaat6S6AyI5VF6ncQ8o-k_KEJk"
          backTitle="Hello"
        />
        <div className="col2Container">
          <FlipBoxItem
            frontTitle="potato"
            colNum={2}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
          />{" "}
          <FlipBoxItem
            frontTitle="potato"
            colNum={2}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
          />
        </div>
        <div className="col3Container">
          <FlipBoxItem
            frontTitle="potato"
            colNum={3}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
          />
          <FlipBoxItem
            frontTitle="potato"
            colNum={3}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
          />
          <FlipBoxItem
            frontTitle="potato"
            colNum={3}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
            buttonText="Hello"
            buttonLink="https://www.zacharywilliams.io"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
