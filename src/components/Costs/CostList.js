import "./CostList.css";
import CostItem from "./CostItem";

const CostList = (props) => {
  // Check for expenses
  if (props.costs.length === 0) {
    return <h1 className="cost-list__fallback">No expenses this year</h1>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          costPrice={cost.costPrice}
        />
      ))}
    </ul>
  );
};

export default CostList;
