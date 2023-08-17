const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.auth.token;

const AuthSelectors = {
  getIsLoggedIn,
  getToken,
};
export default AuthSelectors;
