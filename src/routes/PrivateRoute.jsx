import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, currentUser } = useAuth();
  if (loading) {
    return (
      <div className="min-h-[80vh] grid place-items-center">
        <span className="loading loading-spinner text-warning loading-lg"></span>
      </div>
    );
  }

  if (currentUser) {
    return children;
  } else return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
