import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
