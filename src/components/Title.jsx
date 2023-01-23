import React from "react";

function Title({title}) {
  return (
    <div className="d-flex justify-content-center border border-3 border-dark bg-light rounded-3 p-2">
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
