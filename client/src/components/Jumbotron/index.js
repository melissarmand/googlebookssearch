import React from "react";

function Jumbotron({ children }) {
  const background = "https://www.openathens.net/app/uploads/2021/08/alfons-morales-YLSwjSy7stw-unsplash.jpg"

  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", color: "white", backgroundImage: `url(${background})` }}
      className="jumbotron"
    >
      <h1 style= {{fontSize: "5.5rem"}}>Google Book Search</h1>
      <h3>Search. Save. Learn.</h3>
    </div>
  );
}

export default Jumbotron;