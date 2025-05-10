import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Transaction from "../pages/Transaction";
import Reports from "../pages/Reports";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default AppRoutes;
