import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";

const Costs = (props) => {
  return (
    <Card className="costs">
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
  );
};

export default Costs;
