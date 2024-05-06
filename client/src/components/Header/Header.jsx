import { useState } from "react";
import { useLocation } from "react-router";

import { useAuth } from "../../hooks/use-auth";
import NavSidebar from "../NavSidebar/NavSidebar";
import cn from "./Header.module.css";

function Header() {
  const [isSidebarOpened, setOpen] = useState(false);
  const location = useLocation();
  const {isAuth} = useAuth()
  return (
    <>
      <header className={cn.header}>
        <div className="container">
          <div className={cn.inner}>
            <span className={cn.logo}>WoWo</span>
            <span className={cn.page}>
              {location.pathname != "/sign-in" &&
                location.pathname != "/sign-up" && isAuth &&
                location.pathname.slice(1)}
            </span>
            <div
              className={cn.burger}
              onClick={() => setOpen(!isSidebarOpened)}
            >
              <div className={cn.line} />
            </div>
          </div>
        </div>
      </header>
      <NavSidebar open={isSidebarOpened} setOpen={setOpen} />
    </>
  );
}

export default Header;
