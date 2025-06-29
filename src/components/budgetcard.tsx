const BudgetCard = ({ name, amount, target, color }) => {
  const percentage = Math.min(Math.round((amount / target) * 100), 100);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center space-x-2">
        <div className={`w-4 h-4 rounded-full ${color}`}></div>
        <h2 className="font-bold text-lg">{name}</h2>
      </div>
      <div className="flex justify-between p-4">
        <p className="text-sm text-gray-500">Total Saved</p>
        <p className="font-bold text-lg">${amount}</p>
      </div>
      <div className="px-4">
        <div className="bg-amber-100 h-2 rounded-lg">
          <div
            className={`h-2 rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <p className="text-sm text-gray-600">{percentage}%</p>
        <p className="text-sm text-gray-500">Target of ${target}</p>
      </div>
      <div className="flex justify-between p-4">
        <button className="bg-amber-100 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-black">
          Add Money
        </button>
        <button className="bg-amber-100 px-4 py-2 rounded-lg font-semibold  hover:text-white hover:bg-black">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;
