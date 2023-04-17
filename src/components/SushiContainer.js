import React, { useState } from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, onPlate, plates }) {
  const [show, setShow] = useState(1);

  function onShow() {
    const newShow = show + 4;
    setShow(newShow); 
  }

  const sushisToDisplay = sushis.filter((sushi) => ((sushi.id >= show) && (sushi.id < (show + 4))));

  return (
    <div className="belt">
      {sushisToDisplay.map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          onPlate={onPlate}
          plates={plates}
         />
      ))};
      <MoreButton onShow={onShow} />
    </div>
  );
}

export default SushiContainer;
