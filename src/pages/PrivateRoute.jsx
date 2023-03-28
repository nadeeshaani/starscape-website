// import { Children } from "react";
import { useUserContext } from "../context/userContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import Loader from "../components/shared/Loade";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();

  const {
    logout,

    isAuthenticated,
    isLoading,
    loginWithRedirect,
    myUser,
  } = useUserContext();
  if (isLoading) return <Loader />;
  //if user
  if (user) {
    return children;
  } else {
    loginWithRedirect();
  }

  return <main className="private-redirect"></main>;
};

export default PrivateRoute;
