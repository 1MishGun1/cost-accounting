import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem
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
