import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";
import cn from "./History.module.css";

function History() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
  }, [navigate, isAuth]);
  return (
    <section className={cn.history}>
      <div className="container">
        <div className={cn.inner}>
          <div className={cn.content}>
            <div className={cn.contentInner}>
              <div className={cn.selectBlock}>
                <select className={cn.select}>
                  <option>Choose the day</option>
                  <option className={cn.option}>20.05</option>
                  <option className={cn.option}>19.05</option>
                  <option className={cn.option}>18.05</option>
                  <option className={cn.option}>17.05</option>
                  <option className={cn.option}>16.05</option>
                </select>
              </div>
              <div className={cn.list}>
                <div className={cn.calculation}>
                  <div className={cn.calculationInner}>
                    <span>2+2</span>
                  </div>
                </div>
                <div className={cn.calculation}>
                  <div className={cn.calculationInner}>
                    <span>2x+2y</span>
                  </div>
                </div>
                <div className={cn.calculation}>
                  <div className={cn.calculationInner}>
                    <span>x+y+z</span>
                  </div>
                </div>
                <div className={cn.calculation}>
                  <div className={cn.calculationInner}>
                    <span>y+z</span>
                  </div>
                </div>
                <div className={cn.calculation}>
                  <div className={cn.calculationInner}>
                    <span>x+z^2</span>
                  </div>
                </div>
                <div className={cn.calculation}>
                  <div className={cn.calculationInner}>
                    <span>z+3x^8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
