import { NavLink } from "react-router-dom";

import Reset from "./Reset";
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
      <NavLink to="/">
        <Reset icon={<BiReset />} />
      </NavLink>
    </nav>
  );
};

export default Navbar;
