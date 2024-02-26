import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import { useState } from "react";

const CostItem = (props) => {
  const [deleteCost, setDeleteCost] = useState(0);

  const delCost = () => {
    // deleteCost = "delete cost";
    setDeleteCost("delete cost");
    console.log(deleteCost);
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.costPrice}</div>
        <button className="delete-btn" onClick={delCost}>
          Delete
        </button>
      </div>
    </Card>
  );
};

export default CostItem;
