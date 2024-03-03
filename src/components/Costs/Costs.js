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

  // Check for expenses
  let costsContent = <h3 className="no-costs">No expenses this year</h3>;
  if (filterCost.length > 0) {
    costsContent = filterCost.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        costPrice={cost.costPrice}
      />
    ));
  }

  return (
    <>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costsContent}
      </Card>
    </>
  );
};

export default Costs;
