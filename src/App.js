import { Routes, Route } from "react-router-dom";
import "./App.css";
import { APP_KEYS } from "./constants/const";
import RegisterPageContainer from "./components/auth/register";
import LoginPageContainer from "./components/auth/login";
import HomePageContainer from "./components/home";
import ProfilePageContainer from "./components/auth/profile";
import ForgotPageContainer from "./components/auth/fogot";
import PublicRoute from "./components/route/public.route";
import PrivatRoute from "./components/route/private.route";
import OrderIdPageContainer from "./components/order/pages/orderId";
import OrdersPageContainer from "./components/order/pages/orders";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import operations from "./redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.currentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<PublicRoute />}>
        <Route
          element={<LoginPageContainer />}
          path={APP_KEYS.ROUTER_KEYS.LOGIN}
        />
        <Route
          element={<ForgotPageContainer />}
          path={APP_KEYS.ROUTER_KEYS.FORGOT}
        />
        <Route
          element={<RegisterPageContainer />}
          path={APP_KEYS.ROUTER_KEYS.REGISTER}
        />
      </Route>
      <Route element={<PrivatRoute />}>
        <Route
          element={<OrdersPageContainer />}
          path={APP_KEYS.ROUTER_KEYS.ORDERS}
        />
        <Route
          element={<OrderIdPageContainer />}
          path={APP_KEYS.ROUTER_KEYS.ORDERID}
        />
        <Route
          element={<ProfilePageContainer />}
          path={APP_KEYS.ROUTER_KEYS.PROFILE}
        />
      </Route>
    </Routes>
  );
}

export default App;
