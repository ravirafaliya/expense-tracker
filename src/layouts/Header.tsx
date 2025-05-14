import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div className="w-full bg-[var(--accent-primary-bg)] flex flex-col md:flex-row justify-between items-center pb-2 md:pb-0 lg:pb-0">
      <a
        href="/"
        className="flex items-start justify-center flex-col cursor-pointer p-3 text-center md:text-left"
      >
        <div>
          <h1 className="text-2xl md:text-3xl text-[var(--accent-primary-text)] font-semibold font-serif pt-1">
            Expense Tracker
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-[var(--accent-primary)] text-sm md:text-base">
            Track Your Expenses Easily
          </h2>
        </div>
      </a>
      <div className="mt-3 md:mt-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
