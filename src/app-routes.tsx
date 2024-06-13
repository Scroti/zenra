// src/routes.js
import {
  Route,
  Routes,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import NotFound from "./components/NotFound/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<HomeScreen />}
    />
    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
);

export default AppRoutes;
