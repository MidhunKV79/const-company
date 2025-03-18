import React from "react";

export const About = (props) => {
  // Function to format text with bold capitalized words
  const formatTextWithBoldCaps = (text) => {
    if (!text) return "loading...";
    
    // Split the text by spaces and process each word
    return text.split(" ").map((word, index) => {
      // Check if word is all uppercase (excluding special characters)
      if (word.length > 1 && word === word.toUpperCase() && /[A-Z]/.test(word)) {
        return <strong key={index}>{word}</strong>;
      }
      // Return regular word
      return <React.Fragment key={index}>{word}</React.Fragment>;
    }).reduce((prev, curr, i) => [prev, ' ', curr]); // Add spaces between words
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? formatTextWithBoldCaps(props.data.paragraph) : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};