import React from "react";
import "./btn.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Btn({ size, type, className, children, id, onClick }) {
  return (
    <button onClick={onClick} id={id} className="search-btn lg">
      {children}
    </button>
  );
}

export default Btn;