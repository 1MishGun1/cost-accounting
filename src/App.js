import Costs from "./components/Costs";

const App = () => {
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
      <Costs costs={costs} />
    </div>
  );
};

export default App;