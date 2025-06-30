import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div>
      <section className="flex justify-between p-10 ">
        {" "}
        <h1 className="font-bold"> Personal finance tracker </h1>
        <nav className="font-bold space-x-4 ">
          <a href=""> Features </a>
          <a href="">How it works</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
        </nav>
        <div className="space-x-6">
          <Link
            to="/register"
            className="bg-white text-black p-2  border-black border-2 px-6 py-1 rounded-3xl text-center cursor-pointer shadow-2xl"
          >
            Log In
          </Link>
          <Link
            to={"/register"}
            className="bg-black text-white border-none px-6 py-2 rounded-3xl text-center cursor-pointer"
          >
            Register
          </Link>
        </div>
      </section>

      <section className="justify-center items-center h-screen flex ">
        <div className=" flex justify-center items-center  flex-col text-center">
          <h1 className="font-bold text-2xl">
            {" "}
            Take Control of Your Finances{" "}
          </h1>
          <p className="font-semibold">
            Easily track your income and expenses, manage your budget, and set
            clear financial goals.
            <br /> Gain control of your money and make smarter decisions for a
            secure financial future.
          </p>

          <Link
            to="/register"
            className="bg-black text-white p-4 mt-5 cursor-pointer"
          >
            Get started now for free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Loginpage;
