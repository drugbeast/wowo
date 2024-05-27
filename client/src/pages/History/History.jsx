/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";
import cn from "./History.module.css";

function History() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const dates = Array.from(new Set(history.map((exp) => exp.date)));
  const [date, setDate] = useState("");

  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
    fetch("http://localhost:8080/history")
      .then((res) => res.json())
      .then((hist) => setHistory(hist));
  }, [navigate]);

  return (
    <section className={cn.history}>
      <div className="container">
        <div className={cn.inner}>
          <div className={cn.content}>
            <div className={cn.contentInner}>
              <div className={cn.selectBlock}>
                <select
                  onChange={(e) => setDate(e.target.value)}
                  className={cn.select}
                >
                  <option value="">Choose the day</option>
                  {dates.map((d, i) => (
                    <option value={d} className={cn.option} key={i}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className={cn.list}>
                {history.length ? (
                  history
                    .filter(
                      (exp) =>
                        (date != "" && exp.date == date) || (date == "" && exp)
                    )
                    .map((expression) => (
                      <div className={cn.calculation} key={expression.id}>
                        <div className={cn.calculationInner}>
                          <span>{expression.expression}</span>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className={cn.emptyHistoryMessage}>
                    The History is Empty! Do your first calculations, please!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
