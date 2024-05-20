import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";
import cn from "./Calculator.module.css";

function Calculator() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
  }, [navigate, isAuth]);
  return (
    <section className={cn.calculator}>
      <div className="container">
        <div className={cn.inner}>
          <div className={cn.blockWithInput}>
            <div className={cn.selectBlock}>
              <select className={cn.select}>
                <option>Choose the function</option>
                <option className={cn.option}>+</option>
                <option className={cn.option}>-</option>
                <option className={cn.option}>/</option>
                <option className={cn.option}>*</option>
                <option className={cn.option}>√</option>
              </select>
            </div>
            <input
              type="text"
              className={cn.input}
              placeholder="Type your expression"
            />
            <div className={cn.equalitySign}>
              <span>=</span>
            </div>
          </div>
          <div className={cn.resultBlock}>
            <div className={cn.upperResultBlock}>
              <p className={cn.resultTitle}>Result</p>
              <button className={cn.button}>Step by step</button>
            </div>
            <textarea className={cn.textarea}></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
