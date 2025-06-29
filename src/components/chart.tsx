import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Chart = () => {
  const data = [
    { name: "Bills", value: 750 },
    { name: "Dining Out", value: 75 },
    { name: "Entertainment", value: 50 },
    { name: "Personal Care", value: 100 },
  ];

  const COLORS = ["#82ca9d", "#8884d8", "#ffc658", "#ff8042"];

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl ">Budgets</h3>
        <div>
          {" "}
          <div className="flex items-center">
            <span className="text-sm text-gray-400 cursor-pointer ">
              See Details
            </span>
            <box-icon name="right-arrow-circle" color="gray-400"></box-icon>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 p-4">
        <div>
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="gap-6 m-4 mb-4">
          <div className="flex justify-between">
            <div
              className="w-1 h-4 rounded-sm"
              style={{ backgroundColor: "#007c79" }}
            ></div>
            <span className="text-sm text-gray-500">Entertainment</span>
            <p className="font-semibold">$50</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Bills</p>
            <p className="font-semibold">$750</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Dining Out </p>
            <p className="font-semibold">$75</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Personal Care</p>
            <p className="font-semibold">$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
