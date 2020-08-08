import React from "react";
import FlipBoxItem from "./FlipBox/FlipBoxItem";

function App() {
  return (
    <div className="App">
      <div style={{ width: "80%", margin: "0 auto" }}>
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
        />
        <div style={{ display: "flex" }}>
          <FlipBoxItem
            frontTitle="potato"
            colNum={2}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
            side="left"
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
        <div style={{ display: "flex" }}>
          <FlipBoxItem
            frontTitle="potato"
            colNum={3}
            frontText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum odio. Donec et nisl felis. Aliquam ultrices semper lacus sit amet commodo. Quisque dui turpis, elementum vel nulla id, aliquam congue lacus. Phasellus semper mauris odio, in feugiat nibh molestie in. Mauris pellentesque diam dui, non consectetur neque blandit non. Suspendisse commodo egestas ornare. Nulla ut purus magna. Praesent porta nisi purus, molestie maximus justo semper quis. Etiam in elit bibendum ante porttitor tincidunt in a erat. Proin dignissim justo a ante luctus luctus. Aenean porta posuere lectus, sit amet pulvinar turpis dictum et. Integer a eros eros. "
            backTitle="I really love potatoes. Just thought you should know!"
            backText="Here is the back text."
            backTitleColor="#fff"
            backParagraphColor="#fff"
            side="left"
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
            side="right"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
