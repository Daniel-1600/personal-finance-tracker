const Sidebar = () => {
  return (
    <div>
      <div className="bg-gray-950 w-64 min-h-screen rounded-r-lg fixed p-6">
        <h1 className="font-bold text-3xl mb-10 text-white  "> Finance</h1>
        <a className="flex flex-col  text-lg gap-6 text-gray-300 p-4">
          <a href="/transactions">
            {" "}
            <box-icon name="transfer" color="white" rotate="90"></box-icon>{" "}
            Transactions{" "}
          </a>
          <a href="/addtransaction">
            {" "}
            <box-icon type="solid" color="white" name="receipt"></box-icon>{" "}
            Addtransaction
          </a>
          <a href="">
            {" "}
            <box-icon
              type="solid"
              color="white"
              name="pie-chart-alt-2"
            ></box-icon>{" "}
            Budgets
          </a>
          <a>
            {" "}
            <box-icon
              type="solid"
              color="white"
              name="envelope"
            ></box-icon>{" "}
            Pots
          </a>
          <a>
            <box-icon type="solid" color="white" name="receipt"></box-icon>{" "}
            Recurring Bills
          </a>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
