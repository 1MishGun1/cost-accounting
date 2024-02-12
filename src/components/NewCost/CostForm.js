import "./CostForm.css";
import { useState } from "react";

const CostForm = () => {
  //   const [name, setName] = useState("");
  //   const [costPrice, setCostPrice] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    name: "",
    costPrice: "",
    date: "",
  });

  //   const nameChangeHandler = (e) => {
  //     setName(e.target.value);
  //   };

  //   const amountChangeHandler = (e) => {
  //     setName(e.target.value);
  //   };

  //   const dateChangeHandler = (e) => {
  //     setName(e.target.value);
  //   };

  const nameChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      name: e.target.value,
    });
  };

  const costPriceChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      costPrice: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name new cost</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum new cost</label>
          <input
            type="number"
            onClick={costPriceChangeHandler}
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-cost__control">
          <label>Date addendum</label>
          <input
            type="date"
            onClick={dateChangeHandler}
            min="2015-01-01"
            step="2024-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add cost</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
