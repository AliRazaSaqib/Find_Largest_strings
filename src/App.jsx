import React, { useState } from "react";
import Button from "./components/button";
import TextArea from "./components/textArea";

const App = () => {
  const [text, setText] = useState("");
  const [largestStrings, setLargestStrings] = useState([]);

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    // Split the input into an array of strings
    let strings = text.split(" ");

    // Sort the strings in descending order by length
    strings.sort((a, b) => {
      return b.length - a.length;
    });

    // Get the first five largest strings
    const largest = strings.slice(0, 5);

    // Update the state with the largest strings
    setLargestStrings(largest);
  };

  console.log(largestStrings);

  return (
    <>
      <div className="container">
        <h1 className="glow">GlowFish Lab</h1>
        <div className="body_content">
          <TextArea
            value={text}
            onChange={handleTextAreaChange}
            rows={4}
            cols={50}
          />
          <Button onClick={handleButtonClick}>Click me</Button>

          <div className="list">
            <ul>
              {largestStrings?.map((str, index) => (
                <li key={index}>{str}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;