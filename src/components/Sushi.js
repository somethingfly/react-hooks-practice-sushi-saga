import React from "react";

function Sushi({ sushi, onPlate, plates }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={(e) => onPlate(sushi)}>
        {(plates.includes(sushi)) ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
