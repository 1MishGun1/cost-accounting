import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 20),
      description: "Fridge",
      costPrice: 1000,
    },
    {
      date: new Date(2023, 3, 15),
      description: "PC",
      costPrice: 1500,
    },
    {
      date: new Date(2023, 4, 25),
      description: "Washing machine",
      costPrice: 1700,
    },
  ];

  return (
    <div>
      <h1>Cost accounting</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        costPrice={costs[0].costPrice}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        costPrice={costs[1].costPrice}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        costPrice={costs[2].costPrice}
      />
    </div>
  );
}

export default App;
