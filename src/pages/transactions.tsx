import transactions from "../data/transaction.json";
import { useState } from "react";

const ITEMS_PER_PAGE = 7;

const Transactions = () => {
  const [currentPage, setCurrentpage] = useState(1);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // SWITCHING PAGES
  const gotoPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentpage(page);
    }
  };

  return (
    <div className="p-6 bg-amber-100">
      <div className="flex justify-between p-4">
        <h4 className="font-bold text-2xl">Transactions</h4>
      </div>

      <div className="mt-6 space-y-4 p-6 bg-white rounded-lg">
        {currentItems.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-100 pb-4 p-4"
          >
            {/* image */}
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

      {/* pagination buttons */}

      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => gotoPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => gotoPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => gotoPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Transactions;
