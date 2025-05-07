import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./store/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
