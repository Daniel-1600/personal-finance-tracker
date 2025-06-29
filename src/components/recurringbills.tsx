const Recurringbills = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h5 className="font-bold text-2xl">Recurring bills</h5>
        <div className="flex items-center">
          <span className="text-sm text-gray-400 cursor-pointer ">
            See Details
          </span>
          <box-icon name="right-arrow-circle" color="gray-400"></box-icon>
        </div>
      </div>

      <div className="p-6 gap-8 ">
        <div className="flex justify-between bg-amber-100 p-4 m-4 rounded-lg">
          <p className="text-sm text-gray-400">Paid Bills </p>
          <p className="text-lg font-semibold">$190</p>
        </div>

        <div className="flex justify-between bg-amber-100  p-4 m-4 rounded-lg">
          <p className="text-sm text-gray-400">Paid Bills </p>
          <p className="text-lg font-semibold">$190</p>
        </div>

        <div className="flex justify-between bg-amber-100  p-4 m-4 rounded-lg">
          <p className="text-sm text-gray-400">Paid Bills </p>
          <p className="text-lg font-semibold">$190</p>
        </div>
      </div>
    </div>
  );
};

export default Recurringbills;
