import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transactions";
import Addtransaction from "./pages/addtransaction";
import Budgets from "./pages/budgets";
import Home from "./pages/home";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth pages  */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* protected pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/addtransaction" element={<Addtransaction />} />
        <Route path="/budget" element={<Budgets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
