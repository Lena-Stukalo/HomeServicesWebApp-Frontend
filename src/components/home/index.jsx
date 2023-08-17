import { Navigate } from "react-router-dom";
import { APP_KEYS } from "../../constants/const";

const HomePageContainer = () => {
  return <Navigate to={APP_KEYS.ROUTER_KEYS.LOGIN} />;
};

export default HomePageContainer;
