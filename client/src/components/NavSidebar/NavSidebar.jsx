import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";
import cn from "./NavSidebar.module.css";

NavSidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

function NavSidebar({ open, setOpen }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <section className={`${cn.sidebar} ${open ? cn.open : cn.close}`}>
      <div className={cn.inner}>
        {isAuth ? (
          <div className={cn.links}>
            <Link to="/chat" className={cn.link} onClick={() => setOpen(false)}>
              Chat
            </Link>
            <Link
              to="/calculator"
              className={cn.link}
              onClick={() => setOpen(false)}
            >
              Calculator
            </Link>
            <Link
              to="/profile"
              className={cn.link}
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/history"
              className={cn.link}
              onClick={() => setOpen(false)}
            >
              History
            </Link>
            <button
              className={cn.button}
              onClick={() => {
                localStorage.setItem("user", null);
                navigate("/sign-in");
                setOpen(false);
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <p className={cn.message}>You need to authorize!</p>
        )}
      </div>
    </section>
  );
}

export default NavSidebar;
