import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";

function Calculator() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
  }, [navigate, isAuth]);
  return <h1>Calculator</h1>;
}

export default Calculator;
