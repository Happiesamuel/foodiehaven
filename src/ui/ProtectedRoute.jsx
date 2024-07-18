import PropTypes from "prop-types";
import { useUser } from "../features/authentication/useUser";
import Preloader from "./Preloader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  useEffect(
    function () {
      if (user?.role !== "authenticated" && !isLoading) navigate("/login");
    },
    [navigate, user, isLoading]
  );
  if (isLoading) return <Preloader />;

  return children;
}
ProtectedRoute.propTypes = {
  children: PropTypes,
};

export default ProtectedRoute;
