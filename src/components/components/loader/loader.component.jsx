import { BallTriangle } from "react-loader-spinner";
import * as theme from "../../../theme";
import { Container } from "./loader.styled";

const Loader = () => (
  <Container>
    <BallTriangle
      visible
      height="100"
      width="100"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      color={theme.COLORS.blue}
    />
  </Container>
);
export default Loader;
