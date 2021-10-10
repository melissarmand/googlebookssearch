import React from "react";

function Jumbotron({ children }) {
  

  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", color: "white" }}
      className="jumbotron"
    >
      <h1 style= {{fontSize: "5.5rem"}}>Google Book Search</h1>
      <h3>Search. Save. Learn.</h3>
    </div>
  );
}

export default Jumbotron;