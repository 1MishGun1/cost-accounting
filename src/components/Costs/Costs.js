import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import { useState } from "react";
import CostList from "./CostList";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filterCost = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostList costs={filterCost} />
      </Card>
    </>
  );
};

export default Costs;
