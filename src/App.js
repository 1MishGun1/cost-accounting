// import React from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 20),
    description: "Fridge",
    costPrice: 1000,
  },
  {
    id: "c2",
    date: new Date(2023, 3, 15),
    description: "PC",
    costPrice: 1500,
  },
  {
    id: "c3",
    date: new Date(2023, 4, 25),
    description: "Washing machine",
    costPrice: 1700,
  },
];

const App = () => {
  //? Old version React code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Cost accounting"),
  //   React.createElement(Costs, { costs: costs })
  // );

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  //? New version React code
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
