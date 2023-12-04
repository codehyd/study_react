import React from "react";
import "../css/index.css";

function CellBox({ count }) {
  const onItemClick = () => {
    console.log(count);
  };

  return (
    <div className="cell-box" onClick={onItemClick}>
      {count}
    </div>
  );
}

export default CellBox;
