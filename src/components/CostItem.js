import "./CostItem.css";

function CostItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="cost-item">
      <div className="cost-date ">
        <div className="cost-date__month">{month}</div>
        <div className="cost-date__year">{year}</div>
        <div className="cost-date__day">{day}</div>
      </div>
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.costPrice}</div>
      </div>
    </div>
  );
}

export default CostItem;
