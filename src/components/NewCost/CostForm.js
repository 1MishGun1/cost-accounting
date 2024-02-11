import "./CostForm.css";

const CostForm = () => {
  const nameChangeYandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name new cost</label>
          <input type="text" onChange={nameChangeYandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum new cost</label>
          <input type="number" min="0.1" step="0.1" />
        </div>
        <div className="new-cost__control">
          <label>Data addendum</label>
          <input type="date" min="2015-01-01" step="2024-12-31" />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add cost</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
