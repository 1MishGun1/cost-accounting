import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import { useState } from "react";

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
        {filterCost.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            costPrice={cost.costPrice}
          />
        ))}
      </Card>
    </>
  );
};

export default Costs;
