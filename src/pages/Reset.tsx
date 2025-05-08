import { useEffect } from "react";

const Reset = () => {
  useEffect(() => {
    localStorage.removeItem("transactions"); // or localStorage.clear() to remove everything
    window.location.reload(); // Optional: to refresh UI on Home
  }, []);
  return <div></div>;
};

export default Reset;
