import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div className="w-full bg-[var(--accent-primary-bg)] flex justify-between items-center p-1">
      <div className="flex items-start justify-center flex-col p-3">
        <div>
          <h1 className="text-3xl text-[var(--accent-primary-text)] font-semibold font-serif pt-1">
            Expense Tracker
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-[var(--accent-primary)]">
            Track Your Expenses Easily
          </h2>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
