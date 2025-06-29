import "boxicons";
import Sidebar from "../components/sidebar";
import Chart from "../components/chart";
import Transactions from "../components/transactions";
import Recurringbills from "../components/recurringbills";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] ">
      <Sidebar />
      <div className=" bg-amber-50 p-10 ml-64">
        <h2 className=" text-center font-bold text-3xl mb-4">Overview</h2>
        <div className="grid grid-cols-3 gap-4 w-full ">
          <div className=" shadow-2xl p-4 rounded-lg bg-white ">
            <p className="text-gray-500 text-sm">Current Balance </p>
            <p className="text-2xl font-bold"> $5500</p>
          </div>
          <div className="shadow-2xl rounded-lg bg-white p-4">
            <p className="text-gray-500 text-sm">Income</p>
            <p className="text-2xl font-bold">5000</p>
          </div>
          <div className="shadow-2xl rounded-lg bg-white p-4">
            <p className="text-gray-500 text-sm">Expenses</p>
            <p className="text-2xl font-bold">1200</p>
          </div>
        </div>

        {/* left section */}
        <div className="grid grid-cols-2  mt-6 gap-6 ">
          {/* pots section */}
          <div className=" bg-white p-6 rounded-lg shadow-2xl ">
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">Pots</h2>
              <div className="flex items-center">
                <a
                  className="text-sm text-gray-400 cursor-pointer  "
                  href="/budget"
                >
                  See Details
                </a>
                <box-icon name="right-arrow-circle" color="gray-400"></box-icon>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="p-4 bg-amber-100 rounded-lg m-4">
                <p className="text-sm text-gray-400">Total saved </p>
                <p className="font-bold text-2xl">$920</p>
              </div>
              <div className="grid grid-cols-2 gap-3 p-6">
                <div>
                  <p className="text-sm text-gray-400">Savings</p>
                  <p className="font-bold text-lg">$159</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Gift</p>
                  <p className="font-bold text-lg">$110</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Concert Ticket</p>
                  <p className="font-bold text-lg">$110</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">New Laptop</p>
                  <p className="font-bold text-lg">$1</p>
                </div>
              </div>
            </div>
          </div>

          {/* chart section */}
          <div className="row-span-2 bg-white shadow-2xl rounded-lg">
            <Chart />
          </div>
          {/* transactions */}
          <div className="row-span-2 bg-white shadow-2xl rounded-lg">
            <Transactions />
          </div>
          {/* recurring bills */}
          <div className=" bg-white shadow-2xl rounded-lg">
            {" "}
            <Recurringbills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
