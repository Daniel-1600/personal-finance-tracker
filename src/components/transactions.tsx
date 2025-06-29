import transactions from "../data/transaction.json";

const Transactions = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between ">
        <h4 className="font-bold text-2xl">Transactions</h4>
        <div className="flex items-center">
          <a
            className="text-sm text-gray-400 cursor-pointer "
            href="/transactions"
          >
            See Details
          </a>
          <box-icon name="right-arrow-circle" color="gray-400"></box-icon>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {transactions.slice(0, 6).map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-100 pb-4"
          >
            <div className="flex items-center gap-3">
              {tx.image ? (
                <img
                  src={tx.image}
                  alt={tx.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xl ${tx.bgColor}`}
                >
                  {tx.icon}
                </div>
              )}
              <span className="font-medium text-sm">{tx.name}</span>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold text-sm ${
                  tx.amount >= 0 ? "text-emerald-600" : "text-gray-800"
                }`}
              >
                {tx.amount >= 0
                  ? `+$${tx.amount.toFixed(2)}`
                  : `-$${Math.abs(tx.amount).toFixed(2)}`}
              </p>
              <p className="text-xs text-gray-400">{tx.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
