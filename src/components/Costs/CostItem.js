import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
// import { useState } from "react";

const CostItem = (props) => {
  // const [description, setDescription] = useState(props.description);
  // console.log("Text component");

  // const showDescriptionHandler = () => {
  //   // description = "Test text";
  //   setDescription("Test text"); // description = 'Test text' && CostItem(props)
  //   // console.log(description);
  // };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.costPrice}</div>
      </div>
      {/* <button onClick={showDescriptionHandler}>Edit direction</button> */}
    </Card>
  );
};

export default CostItem;
