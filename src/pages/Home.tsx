import AddTransaction from "../layouts/AddTransaction";
import TransactionHistory from "../layouts/TransactionHistory";
import Header from "../layouts/Header";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex">
        <section className="w-1/2 p-4">
          <AddTransaction />
        </section>
        <section className="w-1/2 p-4">
          <TransactionHistory />
        </section>
      </div>
    </>
  );
};

export default Home;
