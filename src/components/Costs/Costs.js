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
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          costPrice={props.costs[0].costPrice}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          costPrice={props.costs[1].costPrice}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          costPrice={props.costs[2].costPrice}
        />
      </Card>
    </>
  );
};

export default Costs;
