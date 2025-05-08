import { NavLink } from "react-router-dom";
import { BiReset } from "react-icons/bi";

const Navbar = () => {
  const linkStyle = "text-xl font-semibold pr-4 transition-colors duration-300";

  return (
    <nav className="flex justify-center items-center gap-6 pr-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${linkStyle} ${
            isActive
              ? "text-[var(--accent-primary)]"
              : "text-[var(--accent-primary-text)]"
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/transaction"
        className={({ isActive }) =>
          `${linkStyle} ${
            isActive
              ? "text-[var(--accent-primary)]"
              : "text-[var(--accent-primary-text)]"
          }`
        }
      >
        Transaction
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `${linkStyle} ${
            isActive
              ? "text-[var(--accent-primary)]"
              : "text-[var(--accent-primary-text)]"
          }`
        }
      >
        Reports
      </NavLink>
      <NavLink
        to="/"
        onClick={() => {
          localStorage.removeItem("transactions");
          window.location.reload();
        }}
        className={`text-white !flex !justify-center items-center  px-1 py-1 !text-center bg-red-500 hover:bg-red-600 !hover:font-semibold shadow-3xl rounded-full !text-2xl !font-normal transition-colors duration-300`}
      >
        <BiReset />
      </NavLink>
    </nav>
  );
};

export default Navbar;
