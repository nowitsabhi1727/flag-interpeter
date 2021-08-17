import React, { useState } from "react";
import "./styles.css";
// var headingText="Welcome ";
// var color= "blue";

// var userName="abhishek";
// var userName = prompt('What is your name? ');
// var likeCounter="0";
const emojiDictionary = {
  "🇮🇳": "India",
  "🇯🇵": "Japan",
  "🇨🇳": "China",
  "🇨🇦": "Canada",
  "🇪🇸": "Spain",
  "🇦🇺": "Australia",
  "🇺🇸": "United States",
  "🇨🇴": "Colombia",
  "🇰🇷": "South Korea",
  "🇰🇵": "North Korea ",
  "🇹🇭": "Thailand"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  //  const[likeCounter,setlikeCounter]=useState(0);

  //  function likeClickHandler(){
  // console.log("clicked!");
  // newlikeCounter=likeCounter+1;
  // setlikeCounter(newlikeCounter);

  // };
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //  console.log(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Let's Learn About Flag!</h1>
      <input
        placeholder="Search Your Flag"
        onChange={emojiInputHandler}
      ></input>
      <div>
        {" "}
        <h2> {meaning}</h2>{" "}
      </div>
      {/*  <ul>
        emojiDictionary.map(meaning = >{
          <li>{meaning}</li>
        })
      </ul> */}
      <h2>Flags We know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
