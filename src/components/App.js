// import React from "react";
import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// none of this is persisted in a database or connecting to payment system
// assume this is acceptable at this stage in development

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis));
  }, []);

  function onPlate(sushi) {
    if ((money - sushi.price) >= 0) {
      const newMoney = money - sushi.price;
      setMoney(newMoney);
      const newPlates = plates;
      newPlates.push(sushi);
      setPlates(newPlates);
    };
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onPlate={onPlate} plates={plates}/>
      <Table plates={plates} money={money}/>
  </div>
  );
}

/*
function App() {
  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}
*/

export default App;
