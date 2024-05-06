import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";

function History() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
  }, [navigate, isAuth]);
  return <h1>History</h1>;
}

export default History;
