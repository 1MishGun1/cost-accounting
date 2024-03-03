import "./CostForm.css";
import { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputCostPrice, setInputCostPrice] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isAddCost, setAddCost] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   costPrice: '',
  //   date: '',
  // });

  // Add cost btn
  const checkAddCost = () => {
    setAddCost(!isAddCost);
  };

  if (!isAddCost) {
    return (
      <button type="submit" onClick={checkAddCost}>
        Add new cost
      </button>
    );
  }

  const clickCancel = () => {
    setAddCost(false);
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const costPriceChangeHandler = (e) => {
    setInputCostPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      description: inputName,
      costPrice: inputCostPrice,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputCostPrice("");
    setInputDate("");
    setAddCost(false);
  };

  // const nameChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     name: e.target.value,
  //   });
  // };

  //? Alternative syntax
  // setUserInput((previousState) => {
  //   return {
  //     ...previousState,
  //     name: e.target.value
  //   };
  // });

  // const costPriceChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     costPrice: e.target.value,
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     date: e.target.value,
  //   });
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name new cost</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum new cost</label>
          <input
            type="number"
            value={inputCostPrice}
            onChange={costPriceChangeHandler}
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-cost__control">
          <label>Date addendum</label>
          <input
            type="date"
            value={inputDate}
            onChange={dateChangeHandler}
            min="2015-01-01"
            step="2024-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add cost</button>
          <button type="submit" onClick={clickCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
