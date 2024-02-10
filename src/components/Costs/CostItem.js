import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import { useState } from "react";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const showDiscriptionHandler = () => {
    // description = "Test text";
    setDescription("Test text"); // description = 'Test text' && CostItem(props)
    console.log(description);
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.costPrice}</div>
      </div>
      <button onClick={showDiscriptionHandler}>Edit direction</button>
    </Card>
  );
};

export default CostItem;
