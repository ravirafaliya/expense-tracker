import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Transaction from "../pages/Transaction";
import Reports from "../pages/Reports";
import Reset from "../pages/Reset";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
};

export default AppRoutes;
