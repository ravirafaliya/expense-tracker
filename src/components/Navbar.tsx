import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6 text-xl font-semibold text-[var(--accent-primary-text)] pr-4">
      <Link to="/">Dashboard</Link>
      <Link to="/transaction">Transaction</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/reset">Reset</Link>
    </nav>
  );
};

export default Navbar;
