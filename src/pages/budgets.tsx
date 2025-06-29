import budgets from "../data/budgets.json";
import BudgetCard from "../components/BudgetCard";

const Budgets = () => {
  return (
    <div className="bg-amber-100 min-h-screen p-6">
      <h1 className="font-bold text-2xl mb-6">Budgets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget, index) => (
          <BudgetCard
            key={index}
            name={budget.name}
            amount={budget.amount}
            target={budget.target}
            color={budget.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Budgets;
